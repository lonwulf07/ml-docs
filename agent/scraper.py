import trafilatura
import os
import time
import requests
from bs4 import BeautifulSoup
from urllib.parse import urljoin, urlparse
from datetime import datetime

class DocScraper:
    def __init__(self):
        current_dir = os.path.dirname(os.path.abspath(__file__))
        self.storage_dir = os.path.abspath(os.path.join(current_dir, "..", "frontend", "public", "docs"))
        os.makedirs(self.storage_dir, exist_ok=True)

    def get_sub_links(self, base_url, max_links=30):
        """Crawls the base URL to find sub-pages for deeper context."""
        print(f"[*] Discovering links on: {base_url}")
        valid_links = [base_url]
        try:
            response = requests.get(base_url, timeout=10)
            soup = BeautifulSoup(response.text, 'html.parser')
            domain = urlparse(base_url).netloc
            
            for a_tag in soup.find_all('a', href=True):
                if len(valid_links) >= max_links: break
                link = urljoin(base_url, a_tag['href']).split('#')[0]
                if domain in urlparse(link).netloc and link not in valid_links:
                    valid_links.append(link)
            return valid_links
        except Exception as e:
            print(f"[!] Link discovery failed: {e}")
            return [base_url]

    def fetch_and_extract(self, url, max_pages=30):
        """Scrapes multiple pages and combines them into one Markdown doc."""
        links_to_scrape = self.get_sub_links(url, max_links=max_pages)
        combined_markdown = ""
        
        for idx, link in enumerate(links_to_scrape):
            print(f"    -> Scraping {idx+1}/{len(links_to_scrape)}: {link}")
            try:
                downloaded = trafilatura.fetch_url(link)
                if downloaded:
                    content = trafilatura.extract(
                        downloaded, include_links=True, include_formatting=True, output_format="markdown" 
                    )
                    if content:
                        combined_markdown += f"\n\n---\n\n## Source: {link}\n\n{content}"
            except Exception:
                pass
            time.sleep(0.5) 
            
        return combined_markdown if combined_markdown else None

    def save_markdown(self, category, url, content):
        """Saves formatted Markdown to Next.js public/docs."""
        domain = urlparse(url).hostname.replace('docs.', '').replace('www.', '').split('.')[0]
        filename = f"{category}_{domain}.md"
        file_path = os.path.join(self.storage_dir, filename)
        
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(f"# {domain.capitalize()} Documentation\n")
            f.write(f"> Scraped on: {datetime.now().strftime('%Y-%m-%d')} | Root Source: [{url}]({url})\n\n")
            f.write(content)
            
        print(f"[✓] Saved UI Markdown: {filename}")
        return filename