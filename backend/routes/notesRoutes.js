import express from "express"
import { createNote, deleteNote, getAllNotes, updateNote } from "../controllers/notesController";
const router = express.Router();

// Endpoint codes (routes)
router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deleteNote);

export default router;
