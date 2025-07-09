import jwt from "jsonwebtoken";
import { APP_ENV } from "./env.js";

export function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: "Access token required" });
  }

  jwt.verify(token, APP_ENV.JWT_SECRET, (err, user) => {
    if (err) {
      return res.status(403).json({ error: "Invalid token!" });
    }
    req.user = user;
    next();
  });
}
