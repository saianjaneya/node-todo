import express from "express";

import { usersRouter } from "./routes/users.js";
import { todosRouter } from "./routes/todos.js";
import { APP_ENV } from "./env.js";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/users", usersRouter);
app.use("/api/todos", todosRouter);

// Basic health check
app.get("/", (req, res) => {
  res.json({ message: "Todo API is running!" });
});

// Start server
const PORT = APP_ENV.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
