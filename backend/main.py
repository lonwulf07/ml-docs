import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv
from pinecone import Pinecone
from supabase import create_client, Client
from sentence_transformers import SentenceTransformer
import google.generativeai as genai

# Load environment variables
load_dotenv()

# Initialize FastAPI
app = FastAPI(title="ML Docs V2 API")

# Allow your Vercel frontend to talk to this backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # In production, replace "*" with your actual Vercel URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Cloud Clients
print("🔌 Connecting to Supabase...")
url: str = os.environ.get("SUPABASE_URL")
key: str = os.environ.get("SUPABASE_KEY")
supabase: Client = create_client(url, key)

print("🌲 Connecting to Pinecone...")
pc = Pinecone(api_key=os.getenv("PINECONE_API_KEY"))
index = pc.Index("ml-docs")

print("✨ Connecting to Gemini...")
genai.configure(api_key=os.getenv("GEMINI_API_KEY"))
llm = genai.GenerativeModel('gemini-2.5-flash')

# Initialize Local Embedding Model (CPU)
print("🧠 Loading Embedding Model...")
embedder = SentenceTransformer('all-MiniLM-L6-v2')

# Define Request Model
class ChatRequest(BaseModel):
    query: str

@app.get("/")
def health_check():
    return {"status": "V2 Backend is running and connected to Supabase/Pinecone."}

@app.post("/chat")
def chat_endpoint(request: ChatRequest):
    try:
        # 1. Embed the user's question
        query_vector = embedder.encode(request.query).tolist()

        # 2. Search Pinecone for the Top 5 most relevant chunks
        search_results = index.query(
            vector=query_vector,
            top_k=5,
            include_metadata=True
        )

        if not search_results['matches']:
            return {"response": "I couldn't find any relevant documentation in the database."}

        # 3. Extract the Supabase row_ids from the Pinecone metadata
        row_ids = [match['metadata']['row_id'] for match in search_results['matches']]

        # 4. Fetch the actual Markdown text from Supabase
        # We use 'in_' to fetch all matching IDs in a single database trip for speed!
        db_response = supabase.table("documents").select("content, library_name, url").in_("id", row_ids).execute()
        
        # 5. Assemble the Context for Gemini
        context_blocks = []
        sources = set() # Use a set to avoid duplicate source links
        
        for row in db_response.data:
            context_blocks.append(f"--- From {row['library_name']} ---\n{row['content'][:1500]}") # Limiting to 1500 chars per chunk to save tokens
            sources.add(row['url'])

        joined_context = "\n\n".join(context_blocks)
        
        # 6. Prompt Gemini
        prompt = f"""
        You are an expert Machine Learning developer assistant. 
        Answer the user's question using ONLY the provided documentation context below.
        If the context does not contain the answer, say "I don't have enough information in my current documentation to answer that."
        Format your answer beautifully using Markdown, especially for code blocks.
        
        User Question: {request.query}
        
        Documentation Context:
        {joined_context}
        """
        
        gemini_response = llm.generate_content(prompt)
        
        # Append the sources to the bottom of the response
        final_answer = gemini_response.text + "\n\n**Sources used:**\n"
        for source in sources:
            final_answer += f"- [{source}]({source})\n"

        return {"response": final_answer}

    except Exception as e:
        print(f"Error: {e}")
        raise HTTPException(status_code=500, detail=str(e))