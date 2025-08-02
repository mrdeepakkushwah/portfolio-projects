import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import path from "path";
import { fileURLToPath } from "url";
import morgan from "morgan";

import contactRoutes from "./routes/contact-routes.js";

const app = express();
const PORT = process.env.PORT || 3500;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Allowed origins for CORS - add all your frontend URLs here
const allowedOrigins = [
  process.env.CLIENT_URL || "https://deepakkhiraofficial.netlify.app",
  "http://localhost:3000", // local dev
  "https://deepakkhiraofficial.onrender.com", // example Render frontend domain if applicable
];

// CORS middleware with dynamic origin validation
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow requests with no origin (e.g. curl, Postman)
      if (!origin) return callback(null, true);
      if (!allowedOrigins.includes(origin)) {
        return callback(
          new Error(`CORS policy: Origin ${origin} not allowed`),
          false
        );
      }
      return callback(null, true);
    },
    credentials: true,
  })
);

// Preflight OPTIONS request handling with same CORS config
app.options(
  "*",
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

// Security headers
app.use(helmet());

// HTTP request logger
app.use(morgan("dev"));

// JSON body parser
app.use(express.json());

// Rate limiter: max 100 requests per 15 mins on /contact route
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,
});
app.use("/contact", limiter);

// API routes
app.use("/contact", contactRoutes);

// Serve frontend static files from "dist" folder
const DIST_PATH = path.join(__dirname, "dist");
app.use(express.static(DIST_PATH));

// SPA fallback: serve index.html for all unknown routes (frontend routing support)
app.get("*", (req, res) => {
  res.sendFile(path.join(DIST_PATH, "index.html"));
});

// Centralized error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);

  // Handle CORS errors specifically
  if (err.message && err.message.startsWith("CORS policy")) {
    return res.status(403).json({ success: false, error: err.message });
  }

  res.status(500).json({ success: false, error: "Something went wrong!" });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `✅ Server running on ${
      process.env.VITE_BACKEND_URL || `http://localhost:${PORT}`
    }`
  );
  console.log(`✅ Frontend served from ${DIST_PATH}`);
  console.log(`✅ CORS enabled for: ${allowedOrigins.join(", ")}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || "development"}`);
});
