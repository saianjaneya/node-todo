import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { dbPool } from "../db.js";
import { APP_ENV } from "../env.js";

export const usersRouter = express.Router();

// Register user
usersRouter.post("/register", async (req, res) => {
  try {
    const { email, password } = req.body; // Destructuring

    if (!email || !password) {
      // falsy values = "", null, undefined, 0 and false
      return res.status(400).json({ error: "Email and password required" });
    }

    // Check if user exists
    const existingUser = await dbPool.query(
      "SELECT * FROM users WHERE email = $1",
      [email]
    );
    if (existingUser.rows.length > 0) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user
    const result = await dbPool.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING id, email",
      [email, hashedPassword]
    );

    const user = result.rows[0];
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);

    res.status(201).json({
      message: "User created successfully",
      user: { id: user.id, email: user.email },
      token,
    });
  } catch (error) {
    console.error("Register error:", error);
    res.status(500).json({ error: "Server error" });
  }
});

// Login user
usersRouter.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: "Email and password required" });
    }

    // Find user
    const result = await dbPool.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);
    const user = result.rows[0];

    if (!user) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Check password
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    // Generate token
    const token = jwt.sign({ userId: user.id }, APP_ENV.JWT_SECRET);

    res.json({
      message: "Login successful",
      user: { id: user.id, email: user.email },
      token,
    });
  } catch (error) {
    console.error("Login error:", error);
    res.status(500).json({ error: "Server error" });
  }
});
