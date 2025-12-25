import { db } from "../config/db.js";

// Get all questions
export const getQuestions = (req, res) => {
  db.query("SELECT * FROM questions", (err, result) => {
    if (err) return res.status(500).json(err);
    res.json(result);
  });
};

// Submit result
export const submitResult = (req, res) => {
  const { user_id, score } = req.body;
  db.query("INSERT INTO results (user_id, score) VALUES (?, ?)", [user_id, score], (err) => {
    if (err) return res.status(500).json(err);
    res.json({ message: "Result saved" });
  });
};
