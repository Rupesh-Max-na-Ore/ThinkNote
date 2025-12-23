import express from "express";
import notesRoutes from "./routes/notesRoutes.js"
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import rateLimiter from "./middleware/rateLimiter.js";
dotenv.config();

// console.log(process.env.MONGO_URI); //test if can access .env

const app = express();
const PORT = process.env.PORT || 5001;

// middleware -  parses incoming JSON request bodies and makes the data available on req.body
app.use(express.json());
app.use(rateLimiter);


app.use("/api/notes", notesRoutes);

// start to listen on PORT only after db is connected
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("Server started on PORT:", PORT);
    });
});

