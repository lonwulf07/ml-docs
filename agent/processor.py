from langchain_text_splitters import RecursiveCharacterTextSplitter
from langchain_huggingface import HuggingFaceEmbeddings

class DocProcessor:
    def __init__(self):
        print("[*] Initializing Local Embedding Model (all-MiniLM-L6-v2)...")
        self.embeddings = HuggingFaceEmbeddings(
            model_name="all-MiniLM-L6-v2"
        )
        self.text_splitter = RecursiveCharacterTextSplitter(
            chunk_size=1000,
            chunk_overlap=100,
            length_function=len,
        )

    def process_text(self, text, metadata):
        """Splits text into chunks for Pinecone."""
        return self.text_splitter.create_documents([text], metadatas=[metadata])