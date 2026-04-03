import os
from dotenv import load_dotenv
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from supabase import create_client, Client
from pinecone import Pinecone
import google.generativeai as genai
from sentence_transformers import SentenceTransformer

load_dotenv()  # Load environment variables from .env file

# 1. Setup Connections
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], 
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Supabase
supabase_url = os.environ.get("SUPABASE_URL")
supabase_key = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(supabase_url, supabase_key)

# Initialize Pinecone
pc = Pinecone(api_key=os.environ.get("PINECONE_API_KEY"))
index = pc.Index("ml-docs")

# Initialize Gemini
genai.configure(api_key=os.environ.get("GEMINI_API_KEY"))
llm = genai.GenerativeModel('gemini-2.5-flash')

# Initialize local embedding model (Runs on CPU in Hugging Face)
embed_model = SentenceTransformer('all-MiniLM-L6-v2')

# 2. Request Models
class ChatRequest(BaseModel):
    query: str

class LibraryRequest(BaseModel):
    library_name: str

class PageRequest(BaseModel):
    url: str

# 3. Endpoints
@app.post("/chat")
def chat_endpoint(request: ChatRequest):
    try:
        # Step 1: Embed User Query
        query_embedding = embed_model.encode(request.query).tolist()

        # Step 2: Search Pinecone
        search_results = index.query(
            vector=query_embedding,
            top_k=5,
            include_metadata=True
        )

        if not search_results.matches:
            return {"response": "I couldn't find any relevant documentation in the database."}

        # Step 3: Extract Context and Sources
        context = ""
        unique_sources = set()
        for match in search_results.matches:
            meta = match.metadata
            context += f"Source: {meta.get('url')}\nContent: {meta.get('text_snippet')}\n\n"
            unique_sources.add(meta.get('url'))

        # Step 4: Generate Answer with Gemini
        prompt = f"""
        You are an expert AI software engineer. Answer the user's question using ONLY the provided documentation context.
        Format your response in clean Markdown. Include code blocks where applicable.
        
        Context:
        {context}
        
        Question: {request.query}
        """
        
        response = llm.generate_content(prompt)
        answer = response.text

        # Append source links to the bottom of the Markdown response
        if unique_sources:
            answer += "\n\n**Sources used:**\n"
            for src in unique_sources:
                answer += f"* [{src.split('/')[-1]}]({src})\n"

        return {"response": answer}

    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/library/index")
def get_library_index(request: LibraryRequest):
    try:
        # Fetch up to 500 URLs to build the Table of Contents
        res = supabase.table("documents").select("url").eq("library_name", request.library_name).limit(500).execute()
        urls = [row['url'] for row in res.data]
        return {"urls": urls}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

@app.post("/library/page")
def get_page_content(request: PageRequest):
    try:
        # Fetch the exact pristine Markdown from Supabase
        res = supabase.table("documents").select("content").eq("url", request.url).execute()
        if res.data:
            return {"content": res.data[0]['content']}
        return {"content": "# Page not found in cloud database."}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))