Frontend (Next.js) 

Academic Paper Summarizer Frontend (Next.js)

This is the Next.js frontend for Ragarxiv, designed to interact with the FastAPI backend. It allows users to input a research query and receive summarized academic papers.

Drive link for the videos and screenshots of the working project: https://drive.google.com/drive/folders/1KgPE99cXauegjsaz-MrvAZ1YfW7hCTv7
---

Installation and Setup

1. Clone the Repository

git clone https://github.com/Rajvardhan-Tekawade/frontend-RAGarXiv-nextjs
cd frontend

2. Install Dependencies

npm install

or

yarn install

3. Set Up Environment Variables

1. Create a .env.local file in the root of your frontend directory.


2. Add the backend URL (if running locally):

NEXT_PUBLIC_BACKEND_URL=http://127.0.0.1:8000



4. Run the Development Server

npm run dev

or

yarn dev

The app should now be running at:
http://localhost:3000


---

Connecting Frontend to Backend

Ensure that your FastAPI backend is running on http://127.0.0.1:8000 before starting the frontend. If the backend is deployed, update the .env.local file accordingly.


---

FAQ

1. Why is my frontend not showing results?

Ensure the backend is running (uvicorn src.main:app --reload).

Check .env.local to confirm it has the correct backend URL.
