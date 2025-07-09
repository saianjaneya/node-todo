import express from "express";
import { dbPool } from "../db.js";
import { authenticateToken } from "../auth.js";

export const todosRouter = express.Router();

// Get all todos for user
todosRouter.get("/", authenticateToken, async (req, res) => {
  try {
    const result = await dbPool.query(
      "SELECT * FROM todos WHERE user_id = $1 ORDER BY created_at DESC",
      [req.user.userId]
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Get todos error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Create todo
todosRouter.post("/", authenticateToken, async (req, res) => {
  try {
    const { title, description } = req.body;

    if (!title) {
      return res.status(400).json({ error: "Title is required" });
    }

    const result = await dbPool.query(
      "INSERT INTO todos (title, description, user_id) VALUES ($1, $2, $3) RETURNING *",
      [title, description || "", req.user.userId]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Create todo error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Update todo
todosRouter.put("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, completed } = req.body;

    const result = await dbPool.query(
      "UPDATE todos SET title = $1, description = $2, completed = $3 WHERE id = $4 AND user_id = $5 RETURNING *",
      [title, description, completed, id, req.user.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json(result.rows[0]);
  } catch (error) {
    console.error("Update todo error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Delete todo
todosRouter.delete("/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;

    const result = await dbPool.query(
      "DELETE FROM todos WHERE id = $4 AND user_id = $5 RETURNING *",
      [id, req.user.userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    console.error("Delete todo error:", error);
    res.status(500).json({ error: "Server error" });
  }
});
