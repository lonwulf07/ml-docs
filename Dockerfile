# Use official Python image
FROM python:3.10-slim

# Set the working directory
WORKDIR /app

# Copy the requirements file and install dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

# Copy the backend folder into the container
COPY backend/ ./backend/

# Hugging Face Spaces exposes port 7860
EXPOSE 7860

# Start the FastAPI app on port 7860
CMD ["uvicorn", "backend.main:app", "--host", "0.0.0.0", "--port", "7860"]