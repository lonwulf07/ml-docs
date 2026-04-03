# agent/validate_sitemaps.py

import requests
import concurrent.futures
from targets import TARGET_SOURCES

def check_sitemap(library_name, url):
    """Pings a URL and returns the HTTP status code."""
    try:
        # We use a standard browser User-Agent so we don't get blocked by bot protection
        headers = {
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36'
        }
        # We use requests.get with stream=True so we only fetch the headers, not the whole XML file!
        response = requests.get(url, headers=headers, stream=True, timeout=10)
        
        if response.status_code == 200:
            return f"✅ 200 OK : {library_name}"
        else:
            return f"❌ {response.status_code} : {library_name} ({url})"
            
    except requests.exceptions.Timeout:
        return f"⚠️ TIMEOUT : {library_name} ({url})"
    except Exception as e:
        return f"⚠️ ERROR   : {library_name} ({url}) - {type(e).__name__}"

if __name__ == "__main__":
    print("🔍 Launching Sitemap Validator for 50 targets...\n")
    
    # Flatten our nested dictionary into a simple list of tuples: (LibraryName, SitemapURL)
    tasks = []
    for category, libraries in TARGET_SOURCES.items():
        for lib_name, config in libraries.items():
            tasks.append((lib_name, config["sitemap_url"]))

    # Ping 10 sites at a time concurrently for maximum speed
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        # Start all tasks
        future_to_url = {executor.submit(check_sitemap, name, url): name for name, url in tasks}
        
        # Print the results as they finish
        for future in concurrent.futures.as_completed(future_to_url):
            print(future.result())
            
    print("\n🏁 Validation Complete.")