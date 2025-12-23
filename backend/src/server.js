import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";

dotenv.config();

// console.log(process.env.MONGO_URI); //test if can access .env

const app = express();
const PORT = process.env.PORT || 5001;

connectDB();

// middleware -  parses incoming JSON request bodies and makes the data available on req.body
app.use(express.json());

// // simple custom middleware
// app.use((req, res, next) => {
//     // console.log("We just got a new req");
//     console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//     next();
// });

app.use("/api/notes", notesRoutes);

app.listen(PORT, () => {
    console.log("Server started on PORT: 5001");
});
