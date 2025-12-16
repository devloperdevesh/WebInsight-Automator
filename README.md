# 🚀 WebInsight Automator – Data Extraction & Processing Platform

**Author:** Devesh Chauhan
**Role:** Backend / Automation Engineer
**GitHub:** [https://github.com/devloperdevesh](https://github.com/devloperdevesh)
**Live Backend:** [https://webinsight-automator.onrender.com](https://webinsight-automator.onrender.com)
**Live Frontend:** [https://webinsight-automator.vercel.app](https://webinsight-automator.vercel.app)

---

## 📌 About the Project

**WebInsight Automator** is a production-ready, full-stack automation platform designed to **extract, process, and expose structured data from JavaScript-heavy websites**.

The project demonstrates **real-world backend engineering skills** including:

* Async API design
* Selenium-based web automation
* REST API development
* Cloud deployment
* Frontend-backend integration

This project is built with **interview and production readiness** in mind.

---

## 🎯 Problem Statement

Most modern websites rely heavily on JavaScript rendering, making traditional scraping tools ineffective. Recruiters and companies often require:

* Automated data extraction
* Clean and structured output
* Reliable APIs for downstream use

**WebInsight Automator solves this by combining Selenium with FastAPI** to scrape dynamic websites and expose the results via secure REST APIs.

---

## 🧠 Architecture Overview

```
Frontend (React + Vite)
        ↓ Fetch API
FastAPI Backend (Async APIs)
        ↓
Selenium Web Scraper (Headless Chrome)
        ↓
Processed JSON Response
```

---

## 🛠️ Tech Stack

### Backend

* **Python 3.11**
* **FastAPI** (Async REST APIs)
* **Selenium** (JavaScript-heavy scraping)
* **Uvicorn** (ASGI server)

### Frontend

* **React (Vite)**
* **Fetch API**
* Clean dashboard-style UI (White, Gray, Blue theme)

### DevOps & Deployment

* **Render** – Backend hosting
* **Vercel** – Frontend hosting
* **Git & GitHub** – Version control

---

## 🔐 API Security

The backend uses **API-Key based authentication** to protect scraping endpoints.

Each request must include:

```
x-api-key: webinsight-secret-key
```

This approach is simple, secure, and interview-friendly.

---

## 📡 API Endpoints

### Health Check

```
GET /api/health
```

Response:

```json
{ "status": "OK" }
```

---

### Scrape Website

```
POST /api/scrape
```

Request Body:

```json
{
  "url": "https://example.com"
}
```

Response:

```json
{
  "status": "success",
  "data": {
    "title": "Page Title"
  }
}
```

---

## 🖥️ Frontend Usage

1. Open the frontend URL
2. Enter any public website URL
3. Click **Scrape**
4. View extracted data in JSON format

The frontend communicates directly with the deployed backend on Render.

---

## ⚙️ Local Development Setup

### Backend

```bash
cd backend
python -m venv .venv
source .venv/bin/activate  # Windows: .venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```

Visit:

```
http://127.0.0.1:8000/docs
```

---

### Frontend

```bash
cd frontend
npm install
npm run dev
```

---

## 🌍 Deployment Details

### Backend (Render)

* Root Directory: `backend`
* Build Command:

  ```
  pip install -r requirements.txt
  ```
* Start Command:

  ```
  uvicorn app.main:app --host 0.0.0.0 --port 8000
  ```

---

### Frontend (Vercel)

* Root Directory: `frontend`
* Framework: **Vite (React)**
* Environment Variable:

  ```
  VITE_API_URL=https://webinsight-automator.onrender.com
  ```

---

## 🧪 Testing

* Backend tested via Swagger UI
* Frontend tested via deployed Vercel app
* Cross-origin communication enabled via CORS

---

## 📈 Why This Project Matters (Interview Perspective)

This project showcases:

* Clean backend architecture
* Async API handling
* Real-world scraping challenges
* Cloud deployment experience
* Frontend-backend integration

> "This project reflects how production automation systems are designed and deployed in real companies."

---

## 👤 About Me

I am **Devesh Chauhan**, a backend-focused engineer with strong interest in **automation, scalable APIs, and AI-ready backend systems**.

I actively build production-grade projects and deploy them publicly to demonstrate real engineering skills.

---

## 📬 Contact

* **Email:** [deveshchauhandk_cse23@its.edu.in](mailto:deveshchauhandk_cse23@its.edu.in)
* **LinkedIn:** [https://linkedin.com/in/devesh-chauhan-6b5691308](https://linkedin.com/in/devesh-chauhan-6b5691308)
* **GitHub:** [https://github.com/devloperdevesh](https://github.com/devloperdevesh)

---

✅ **Status:** Production Ready | Interview Ready | Resume Safe
