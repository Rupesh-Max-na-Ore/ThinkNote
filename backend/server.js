import express from "express";
import notesRoutes from "./routes/notesRoutes.js"

const app = express();

app.use("/api/notes", notesRoutes)

// Endpoint codes (routes)
app.get("/api/notes", (req, res) => {
    res.status(200).send("you got many notes");
});

app.post("/api/notes", (req, res) => {
    res.status(201).json({message:"Note created successfully!"})
});

app.put("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note updated successfully!"})
});

app.delete("/api/notes/:id", (req, res) => {
    res.status(200).json({message:"Note deleted successfully!"})
});

app.listen(5001, () => {
    console.log("Server started on PORT: 5001");
});
