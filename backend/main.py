import os
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from dotenv import load_dotenv

from langchain_google_genai import ChatGoogleGenerativeAI
from langchain_huggingface import HuggingFaceEmbeddings
from langchain_pinecone import PineconeVectorStore
from langchain_core.prompts import ChatPromptTemplate
from langchain_classic.chains.combine_documents import create_stuff_documents_chain
from langchain_classic.chains import create_retrieval_chain

load_dotenv()
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

# 1. Local Embeddings for Vector Search (Matches Orchestrator)
embeddings = HuggingFaceEmbeddings(
    model_name="all-MiniLM-L6-v2"
)

vectorstore = PineconeVectorStore(
    index_name="ml-docs",
    embedding=embeddings,
    pinecone_api_key=os.getenv("PINECONE_API_KEY")
)

# 2. Gemini for Answering (Uses only Chat Quota, not Embedding Quota)
llm = ChatGoogleGenerativeAI(
    model="gemini-2.5-flash",
    google_api_key=os.getenv("GEMINI_API_KEY"),
    temperature=0.2
)

prompt = ChatPromptTemplate.from_messages([
    ("system", "You are an expert ML Documentation Agent. Answer accurately based on the context. If the answer is not in the context, say you don't know.\n\nContext: {context}"),
    ("human", "{input}"),
])

combine_docs_chain = create_stuff_documents_chain(llm, prompt)
rag_chain = create_retrieval_chain(vectorstore.as_retriever(search_kwargs={"k": 5}), combine_docs_chain)

class ChatQuery(BaseModel):
    message: str

@app.post("/chat")
async def chat_endpoint(query: ChatQuery):
    try:
        response = rag_chain.invoke({"input": query.message})
        return {
            "answer": response["answer"],
            "sources": list(set([doc.metadata.get("source") for doc in response["context"]]))
        }
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)