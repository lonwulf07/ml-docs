---
title: ML Docs V2 API
emoji: 🚀
colorFrom: blue
colorTo: green
sdk: docker
pinned: false
---

This is the FastAPI backend for the ML Docs Agent.

# 🧠 ML Docs Agent: Enterprise Knowledge Engine

An enterprise-grade Retrieval-Augmented Generation (RAG) application that scrapes, embeds, and indexes machine learning documentation. It features a fully automated cloud pipeline, a serverless PostgreSQL database, a vector search index, a containerized FastAPI backend, and a modern Next.js cloud reading environment.

## 🏗️ Architecture Workflow

This project is divided into a robust backend cloud pipeline and a highly responsive frontend reader.

1. **The Crawler & Processor (V3 Cloud Automation):**
   - A Python orchestrator uses `BeautifulSoup` and `markdownify` to deep-crawl targeted ML documentation, stripping away junk HTML (navbars, footers) and preserving pristine Markdown.
   - Raw Markdown text is pushed directly to a **Supabase** (PostgreSQL) cloud database for on-demand UI streaming.
   - The text is chunked and processed using a local Hugging Face embedding model (`all-MiniLM-L6-v2`) via CPU, and the vectors are pushed to **Pinecone**, completely bypassing commercial embedding API costs.

2. **The Brain (Hugging Face Spaces):**
   - A Dockerized **FastAPI** server orchestrates the application.
   - It serves specific Markdown pages to the frontend Reader Mode on demand.
   - It hosts the Chat endpoint: taking user queries, embedding them, retrieving the top 5 relevant contexts from Pinecone, and feeding them to **Google Gemini 2.5 Flash** to generate highly accurate, verifiable answers with cited sources.

3. **The Face (Vercel & Next.js):**
   - A responsive, lightweight Next.js frontend deployed globally via Vercel.
   - Features a dynamic Cloud Reader that fetches documentation from Supabase in real-time, complete with a custom macOS-style terminal UI for AI code outputs.

4. **The Automation (GitHub Actions):**
   - A headless weekly cron job securely injects cloud keys and triggers the Python orchestrator to fetch the latest documentation and silently update the Supabase and Pinecone databases—requiring zero Git commits or frontend redeploys.

---

## 📂 Project Structure

```text
ml-doc-agent/
├── .github/workflows/      # Automated weekly sync actions
│   └── sync.yml
├── agent/                  # The Data Pipeline
│   ├── orchestrator.py     # Master V3 script for crawling, markdownify, & embedding
│   ├── processor.py        # Local Hugging Face embeddings logic
│   ├── scraper.py          # Trafilatura/BeautifulSoup extraction
│   └── targets.py          # Pruned dictionary of "Known Good" ML libraries
├── backend/                # The RAG API
│   └── main.py             # FastAPI server (Supabase Fetcher & Gemini Logic)
├── frontend/               # The Web UI
│   ├── public/             # Static assets
│   ├── src/
│   │   ├── app/            # Next.js App Router (page.tsx, globals.css, layout.tsx)
│   │   ├── components/     # Cloud Reader Sidebar and ChatDrawer UI
│   │   └── data/           # targets.json for dynamic sidebar population
│   ├── tailwind.config.ts  
│   └── package.json
├── Dockerfile              # Hugging Face deployment config
├── requirements.txt        # Python dependencies
├── .env                    # Local API Keys (Git Ignored)
└── .gitignore
```

---

## 🚀 Local Setup & Installation

### 1. Prerequisites
- Python 3.10+
- Node.js 18+
- A [Pinecone](https://pinecone.io/) Account (Create an index named `ml-docs` with **384 dimensions** and **cosine** metric).
- A Supabase Account (Create a table named documents with columns: id, library_name, url, and content).
- A [Google AI Studio](https://aistudio.google.com/) API Key (for Gemini).

### 2. Clone and Configure
Clone the repository and set up your environment variables:

```bash
git clone [https://github.com/YOUR_USERNAME/ml-doc-agent.git](https://github.com/YOUR_USERNAME/ml-doc-agent.git)
cd ml-doc-agent

# Create the .env file with your specific keys
echo "SUPABASE_URL=your_supabase_url_here" >> .env
echo "SUPABASE_KEY=your_supabase_anon_key_here" >> .env
echo "PINECONE_API_KEY=your_pinecone_key_here" >> .env
echo "GEMINI_API_KEY=your_gemini_key_here" >> .env
```

### 3. Install Dependencies

**Backend (Python):**
```bash
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
```

**Frontend (Next.js):**
```bash
cd frontend
npm install
cd ..
```

### 4. Build the Knowledge Base
Run the orchestrator to scrape the targets and populate your Supabase and Pinecone databases. This will run the embedding model locally on your CPU.

```bash
python agent/orchestrator.py
```

### 5. Run the Application
You will need two terminal windows to run the full stack locally.

**Terminal 1 (FastAPI Backend):**
```bash
python backend/main.py
```

**Terminal 2 (Next.js Frontend):**
```bash
cd frontend
npm run dev
```
Navigate to `http://localhost:3000` to view the application.

---

## ☁️ Deployment Guide

### Deploying the Backend (Hugging Face Spaces)
1. Create a new **Docker** Space on Hugging Face.
2. Go to Settings -> Variables and secrets, and add your 4 API Keys (SUPABASE_URL, SUPABASE_KEY, PINECONE_API_KEY, GEMINI_API_KEY).
3. Push the repository to the Space remote:
```bash
git remote add hf [https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME](https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME)
git push hf main
```

### Deploying the Frontend (Vercel)
1. Import the repository into Vercel.
2. Set the Root Directory to frontend in the project settings.
3. Add a new Environment Variable in Vercel: NEXT_PUBLIC_API_URL pointing to your Hugging Face Space URL (e.g., https://your-space-name.hf.space).
4. Click **Deploy**.

### Setting up the Automation (GitHub Actions)
1. Go to your GitHub Repository Settings -> Secrets and variables -> Actions.
2. Add your SUPABASE_URL, SUPABASE_KEY, and PINECONE_API_KEY as Repository Secrets.
3. The included .github/workflows YAML file will automatically run the web scraper every Sunday to keep your cloud databases completely up to date.

---

## 🛠️ Tech Stack
- **AI/LLM:** Gemini 2.5 Flash, LangChain, HuggingFace (`all-MiniLM-L6-v2`)
- **Backend:** Python, FastAPI, Pinecone, Supabase, BeautifulSoup, Markdownify
- **Frontend:** Next.js, React, Tailwind CSS, ReactMarkdown, Lucide Icons
- **Deployment:** Vercel (Web), Hugging Face Spaces (API), Docker, GitHub Actions