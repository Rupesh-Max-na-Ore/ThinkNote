# Thinkboard - Note Taking App (MERN Stack)

A simple and modern note-taking app built with the MERN stack (MongoDB, Express, React, Node.js) and styled with TailwindCSS + DaisyUI.

---

## Features

- Create, view, update, and delete notes
- Rate limiting to prevent abuse
- Responsive and modern UI with DaisyUI themes

---

## Prerequisites

- [Node.js](https://nodejs.org/) (v18 or above recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)
- [MongoDB](https://www.mongodb.com/) (local or Atlas cloud instance)

---

## Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/Rupesh-Max-na-Ore/thinkboard.git
cd thinkboard
```

### 2. **Set up the backend**

```bash
cd backend
cp .env.example .env
```
- Edit `.env` and set your `MONGO_URI` (MongoDB connection string).

**Install dependencies:**
```bash
npm install
```

**Start the backend server:**
```bash
npm run dev
```
- The backend will run on [http://localhost:5001](http://localhost:5001) by default.

---

### 3. **Set up the frontend**

Open a new terminal window/tab:

```bash
cd frontend
npm install
```

**Start the frontend dev server:**
```bash
npm run dev
```
- The frontend will run on [http://localhost:5173](http://localhost:5173) by default.

---

## Usage

- Open [http://localhost:5173](http://localhost:5173) in your browser.
- Create, view, edit, and delete notes!
- If you hit the rate limit, wait a few seconds and try again.

---

## Environment Variables

**Backend (`backend/.env`):**
```
MONGO_URI=your_mongodb_connection_string
```

---

## Troubleshooting

- If you see errors about MongoDB connection, check your `MONGO_URI` in `.env`.
- If ports are in use, change the `PORT` in `backend/src/server.js` or the frontend port in `frontend/vite.config.js`.
- If you accidentally committed `node_modules`, see the instructions in this repo's issues or README.

---

This project is made for educational purposes and personal use only.

## Credits

- Built with [MERN](https://www.mongodb.com/mern-stack), [TailwindCSS](https://tailwindcss.com/),