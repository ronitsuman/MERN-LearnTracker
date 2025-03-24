import express from "express";
import { authenticateUser } from "../middleware/authhMiddlleware.js";
import {
  createLearning,
  getUserLearnings,
  updateLearning,
  deleteLearning,
} from "../controllers/learningController.js";

export const router = express.Router();

// ✅ Protected Routes (Login Required)
router.post("/add", authenticateUser, createLearning);
router.get("/all", authenticateUser, getUserLearnings);
router.put("/update/:id", authenticateUser, updateLearning);
router.delete("/delete/:id", authenticateUser, deleteLearning);
