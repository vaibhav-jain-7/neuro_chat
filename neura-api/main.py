from fastapi import FastAPI
from pydantic import BaseModel
from langchain_core.prompts import ChatPromptTemplate
from langchain_ollama.llms import OllamaLLM
from fastapi.middleware.cors import CORSMiddleware
import nest_asyncio
import uvicorn
from dotenv import load_dotenv
import os

load_dotenv()
base_url = os.getenv("NGROK_SESSION_LINK", "")
if not base_url:
    raise ValueError("Environment variable NGROK_SESSION_LINK is missing.")
nest_asyncio.apply()

# 🔌 LangChain Setup
template = """Question: {question}

Answer: Let's think step by step."""
prompt = ChatPromptTemplate.from_template(template)
model = OllamaLLM(model='llama3', base_url=base_url)
chain = prompt | model

# 📦 Request schema
class QuestionRequest(BaseModel):
    question: str

# 🚀 FastAPI app
app = FastAPI()

origins = [
    "http://localhost:5173" ,
    "*"  # Use "*" to allow all origins — not recommended for production
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,            # Accept requests from these origins
    allow_credentials=True,
    allow_methods=["*"],              # Accept all HTTP methods (POST, GET, etc.)
    allow_headers=["*"],              # Accept all headers
)

@app.post("/ask")
def ask_question(request: QuestionRequest):
    try:
        result = chain.invoke({"question": request.question})
        return {"response": result}
    except Exception as e:
        return {"error": str(e)}

uvicorn.run(app, port=8002)
