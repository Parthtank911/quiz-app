import express from "express";
import { getQuestions, submitResult } from "../controllers/quizController.js";

const router = express.Router();

router.get("/", getQuestions);
router.post("/submit", submitResult);

export default router;
