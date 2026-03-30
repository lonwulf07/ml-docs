import os
import json
from targets import TARGET_SOURCES
from scraper import DocScraper
from processor import DocProcessor
from export_targets import export_to_json
from langchain_pinecone import PineconeVectorStore
from dotenv import load_dotenv

load_dotenv()

# We save progress inside the agent folder now
PROGRESS_FILE = os.path.join(os.path.dirname(os.path.abspath(__file__)), "processed_urls.json")

def load_progress():
    if os.path.exists(PROGRESS_FILE):
        with open(PROGRESS_FILE, "r") as f:
            return set(json.load(f))
    return set()

def save_progress(processed_urls):
    with open(PROGRESS_FILE, "w") as f:
        json.dump(list(processed_urls), f)

def run_sync_process():
    scraper = DocScraper()
    processor = DocProcessor()
    processed_urls = load_progress()
    
    vectorstore = PineconeVectorStore(
        index_name="ml-docs", 
        embedding=processor.embeddings,
        pinecone_api_key=os.getenv("PINECONE_API_KEY")
    )

    print(f"=== Starting Unlimited Sync ({len(processed_urls)} sites already processed) ===")

    for category, urls in TARGET_SOURCES.items():
        for url in urls:
            if url in processed_urls:
                continue 

            content = scraper.fetch_and_extract(url, max_pages=30)
            if not content:
                continue

            # 1. Save Markdown for the Next.js UI
            scraper.save_markdown(category, url, content)

            # 2. Process for Pinecone (RAG)
            chunks = processor.process_text(content, {"source": url, "category": category})
            print(f"[*] Uploading {len(chunks)} chunks to Pinecone...")
            
            try:
                vectorstore.add_documents(chunks)
                processed_urls.add(url)
                save_progress(processed_urls)
            except Exception as e:
                print(f"[!] Error uploading vectors for {url}: {e}")

    print("[*] Exporting targets for frontend...")
    export_to_json()
    print("=== Sync Complete ===")

if __name__ == "__main__":
    run_sync_process()