import { Pool } from "pg";
import { APP_ENV } from "./env.js";

export const dbPool = new Pool({
  host: APP_ENV.DB_HOST,
  port: APP_ENV.DB_PORT,
  database: APP_ENV.DB_NAME,
  user: APP_ENV.DB_USER,
  password: APP_ENV.DB_PASSWORD,
});

// Test connection
dbPool
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Database connection error:", err));
