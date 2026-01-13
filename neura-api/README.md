# LLAMA

### Steps to start
1. First make virtual environment
    - > python -m venv venv
    - > cd venv/Scripts
    - > activate
    - > cd ../..
2. then install required dependencies
    - > pip install fastapi uvicorn pyngrok dotenv
    - > pip install langchain beautifulsoup4 langchain-community langchain-chroma cohere langchainhub  
    - > pip install -U langchain-ollama 
    - > pip install nest-asyncio

3. Add the logic to main.py file 
4. run the code using
    - > uvicorn main:app --reload
5. to fix and create the requirement.txt file for all dependencies used through out the code run
    - > pip freeze > requirements.txt



# github steps
1. git init
2. make new repo like `neuro-api` in github
3. after that add a file in your local machine code i.e. `.gitignore` at root 
4. add below block in .gitignore file:
        ```
        .env
        __pycache__
        ```
5. run `git remote add origin https://github.com/i-Bhumika-Jain/neura-api.git`
6. This would link your remote repo with your local code on your machine
7. now run `git add .`
8. `git commit -m "Initial commit"`
9. `git push origin <branch-name>`