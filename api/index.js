import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import postRoutes from "./routes/post.route.js";
import cookieParser from "cookie-parser";
import path from "path";

dotenv.config();

// Ensure environment variables are set or use default values
const { MONGO, PORT = 3000 } = process.env;

// Handle missing environment variables
if (!MONGO) {
  console.error("MONGO environment variable is not defined.");
  process.exit(1);
}

mongoose
  .connect(MONGO)
  .then(() => {
    console.log("MongoDb is connected");
  })
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

const __dirname = path.resolve();

const app = express();
app.use(express.json());
app.use(cookieParser());

// Use routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

// Serve static files
app.use(express.static(path.join(__dirname, "client", "dist")));

// Serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "dist", "index.html"));
});

// Error handling middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
