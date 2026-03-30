# 🧠 ML Docs Agent: Local Knowledge Engine

An enterprise-grade Retrieval-Augmented Generation (RAG) application that scrapes, embeds, and indexes machine learning documentation. It features a completely free local embedding pipeline, a cloud-hosted vector database, a containerized FastAPI backend, and a modern Next.js reading environment.

## 🏗️ Architecture Workflow

This project is divided into a robust backend pipeline and a highly responsive frontend reader.

1. **The Crawler & Processor (Local Automation):**
   - A Python orchestrator uses `trafilatura` and `BeautifulSoup` to deep-crawl targeted ML documentation (Python, PyTorch, Scikit-Learn, etc.).
   - It saves visually clean `.md` files directly to the Next.js `public/docs` folder for instant UI rendering.
   - It chunks the text and processes it using a local Hugging Face embedding model (`all-MiniLM-L6-v2`) via the CPU, completely bypassing commercial API rate limits and costs.
   - The generated vectors are uploaded to a **Pinecone** index.

2. **The Brain (Hugging Face Spaces):**
   - A Dockerized **FastAPI** server hosts the chat endpoint.
   - It takes user queries, embeds them using the same local model, retrieves the top 5 relevant contexts from Pinecone, and feeds them to **Google Gemini 2.5 Flash** to generate highly accurate, verifiable answers.

3. **The Face (Vercel & Next.js):**
   - A responsive Next.js frontend deployed globally via Vercel.
   - Features dynamic pagination for long documents, auto-generated Table of Contents, and a custom macOS-style terminal UI for AI code outputs.

4. **The Automation (GitHub Actions):**
   - A weekly cron job automatically triggers the orchestrator to scrape the latest documentation, update the Pinecone vectors, and commit the new Markdown files back to the repository.

---

## 📂 Project Structure

```text
ml-doc-agent/
├── .github/workflows/      # Automated weekly sync actions
├── agent/                  # The Data Pipeline
│   ├── orchestrator.py     # Master script for crawling & embedding
│   ├── processor.py        # Local Hugging Face embeddings logic
│   ├── scraper.py          # Trafilatura markdown extractor
│   ├── targets.py          # URL dictionary of ML libraries
│   └── processed_urls.json # Crawler progress tracker
├── backend/                # The RAG API
│   └── main.py             # FastAPI server and LangChain logic
├── frontend/               # The Web UI
│   ├── public/docs/        # Generated Markdown files live here
│   ├── src/
│   │   ├── app/page.tsx    # Main dashboard and reading layout
│   │   ├── components/     # Sidebar and ChatDrawer UI
│   │   └── data/           # targets.json for dynamic sidebar
│   ├── tailwind.config.ts  
│   └── package.json
├── Dockerfile              # Hugging Face deployment config
├── requirements.txt        # Python dependencies
└── .gitignore
```

---

## 🚀 Local Setup & Installation

### 1. Prerequisites
- Python 3.10+
- Node.js 18+
- A [Pinecone](https://pinecone.io/) Account (Create an index named `ml-docs` with **384 dimensions** and **cosine** metric).
- A [Google AI Studio](https://aistudio.google.com/) API Key (for Gemini).

### 2. Clone and Configure
Clone the repository and set up your environment variables:

```bash
git clone [https://github.com/YOUR_USERNAME/ml-doc-agent.git](https://github.com/YOUR_USERNAME/ml-doc-agent.git)
cd ml-doc-agent

# Create the .env file
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
Run the orchestrator to scrape the targets and populate your Pinecone database. This will download the embedding model to your CPU and may take a few minutes depending on your hardware.

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
2. Add `PINECONE_API_KEY` and `GEMINI_API_KEY` to your Space's Secrets.
3. Push the repository to the Space remote:
```bash
git remote add hf [https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME](https://huggingface.co/spaces/YOUR_USERNAME/YOUR_SPACE_NAME)
git push hf main
```

### Deploying the Frontend (Vercel)
1. Update the fetch URL in `frontend/src/components/ChatDrawer.tsx` to point to your new Hugging Face Space URL.
2. Push the changes to GitHub.
3. Import the repository into Vercel.
4. Set the **Root Directory** to `frontend` in the project settings.
5. Click **Deploy**.

---

## 🛠️ Tech Stack
- **AI/LLM:** Gemini 2.5 Flash, LangChain, HuggingFace (`all-MiniLM-L6-v2`)
- **Backend:** Python, FastAPI, Pinecone, Trafilatura, BeautifulSoup
- **Frontend:** Next.js, React, Tailwind CSS, ReactMarkdown, Lucide Icons
- **Deployment:** Vercel (Web), Hugging Face Spaces (API), Docker, GitHub Actions