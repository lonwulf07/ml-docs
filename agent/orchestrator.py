import os
import re
import io
import gzip
import requests
from bs4 import BeautifulSoup
from markdownify import markdownify as md
from dotenv import load_dotenv
from supabase import create_client, Client
from pinecone import Pinecone
from sentence_transformers import SentenceTransformer

# Import your pruned targets file
from targets import TARGET_SOURCES

# ==========================================
# 1. SETUP & CONNECTIONS
# ==========================================

load_dotenv()

print("🔌 Connecting to Supabase...")
supabase_url = os.environ.get("SUPABASE_URL")
supabase_key = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)

print("🌲 Connecting to Pinecone...")
pc = Pinecone(api_key=os.environ.get("PINECONE_API_KEY"))
index_name = "ml-docs" # MUST MATCH YOUR PINECONE DASHBOARD EXACTLY
index = pc.Index(index_name)

print("🧠 Loading Local Embedding Model (CPU)...")
model = SentenceTransformer('all-MiniLM-L6-v2')

# ==========================================
# 2. THE SITEMAP SNIPER (V2)
# ==========================================
def sniper_sitemap(sitemap_url, must_include, must_exclude, visited=None):
    """Fetches sitemaps, handles GZIP compression, prevents infinite loops, and uses strict HTTP regex."""
    if visited is None:
        visited = set()
    if sitemap_url in visited:
        return []
    visited.add(sitemap_url)
    
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'}
    try:
        response = requests.get(sitemap_url, headers=headers, timeout=15)
        response.raise_for_status()
        
        # Handle compressed sitemaps (like LangChain and HuggingFace)
        if sitemap_url.endswith('.gz'):
            raw_text = gzip.GzipFile(fileobj=io.BytesIO(response.content)).read().decode('utf-8')
        else:
            raw_text = response.text
            
        # Extract URLs using Regex to bypass XML namespace issues
        all_urls = re.findall(r'<loc[^>]*>\s*(http.*?)\s*</loc>', raw_text, re.IGNORECASE | re.DOTALL)
        
        clean_urls = []
        for url in all_urls:
            url = url.strip()
            
            # Recursively follow sitemap indexes
            if (url.endswith('.xml') or url.endswith('.gz')) and url not in visited:
                print(f"    📂 Diving into sub-sitemap: {url.split('/')[-1]}")
                clean_urls.extend(sniper_sitemap(url, must_include, must_exclude, visited))
                continue
                
            # Apply our strict inclusion/exclusion filters
            if must_include in url and not any(ex in url for ex in must_exclude):
                clean_urls.append(url)
                
        return list(set(clean_urls))
        
    except Exception as e:
        print(f"  ❌ Sitemap failed: {e}")
        return []

# ==========================================
# 3. THE MARKDOWN EXTRACTOR (V3)
# ==========================================
def process_url(url, library_name):
    """Scrapes raw HTML, isolates the main content, converts to pristine Markdown, and ingests."""
    try:
        text = None
        headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)'}
        response = requests.get(url, headers=headers, timeout=15)
        
        if response.status_code == 200:
            soup = BeautifulSoup(response.content, 'html.parser')
            
            # Destroy junk HTML (nav bars, footers, sidebars, scripts)
            for element in soup(["nav", "footer", "header", "script", "style", "aside"]):
                element.decompose()
                
            # Isolate the main documentation container
            main_content = soup.find('main') or soup.find('article') or soup.find(role='main')
            if not main_content:
                main_content = soup.body
                
            if main_content:
                # Convert the isolated HTML directly to Markdown
                text = md(str(main_content), heading_style="ATX", code_language="python").strip()

        # Fallback to Jina AI if the site is purely JavaScript rendered
        if not text or len(text) < 50:
            try:
                jina_url = f"https://r.jina.ai/{url}"
                response = requests.get(jina_url, headers=headers, timeout=20)
                if response.status_code == 200:
                    text = response.text
            except Exception:
                pass 

        if not text or len(text) < 50: 
            print(f"  ⏭️ Skipped (Could not extract text): {url}")
            return False

        # --- DB INGESTION ---
        # 1. Save pristine Markdown to Supabase
        db_res = supabase.table("documents").insert({
            "library_name": library_name,
            "url": url,
            "content": text
        }).execute()
        
        row_id = db_res.data[0]['id']

        # 2. Chunk text for Vector DB
        words = text.split()
        chunks = [" ".join(words[i:i + 300]) for i in range(0, len(words), 250)]
        
        # 3. Embed and push to Pinecone
        vectors = []
        for i, chunk in enumerate(chunks):
            embedding = model.encode(chunk).tolist()
            vectors.append({
                "id": f"{row_id}-chunk-{i}",
                "values": embedding,
                "metadata": {
                    "library_name": library_name,
                    "url": url,
                    "row_id": row_id, 
                    "text_snippet": chunk[:200] + "..." 
                }
            })
            
        if vectors:
            index.upsert(vectors=vectors)
            
        print(f"  ✅ Ingested: {url}")
        return True
        
    except Exception as e:
        print(f"  ⚠️ Error processing {url}: {e}")
        return False

# ==========================================
# 4. THE MASTER LOOP
# ==========================================
def main():
    print("\n🚀 Starting V3 Master Orchestrator\n")
    
    for category, libraries in TARGET_SOURCES.items():
        for lib_name, config in libraries.items():
            print(f"\n🎯 Target: {lib_name}")
            
            # 1. Snipe all valid URLs
            urls = sniper_sitemap(config["sitemap_url"], config["must_include"], config["must_exclude"])
            print(f"  📡 Found {len(urls)} valid pages in sitemap.")
            
            if not urls:
                continue
                
            # 2. Bulk check Supabase to avoid redundant scraping
            print("  🔍 Performing bulk database check...")
            existing_urls = set()
            chunk_size = 200  # Safe batch size to prevent HTTP URL length errors
            
            for i in range(0, len(urls), chunk_size):
                url_chunk = urls[i:i + chunk_size]
                try:
                    existing_records = supabase.table("documents").select("url").in_("url", url_chunk).execute()
                    for record in existing_records.data:
                        existing_urls.add(record["url"])
                except Exception as e:
                    print(f"  ⚠️ Warning: Failed to check a chunk of URLs: {e}")
            
            new_urls = [u for u in urls if u not in existing_urls]
            print(f"  ⏭️ Skipped {len(existing_urls)} already ingested pages.")
            
            if not new_urls:
                continue
                
            print(f"  🚀 Processing {len(new_urls)} new pages...")
            
            # 3. Process new URLs
            for url in new_urls:
                process_url(url, lib_name)

    print("\n🏁 Total Ingestion Complete.")

if __name__ == "__main__":
    main()