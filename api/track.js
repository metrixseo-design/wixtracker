// api/track.js
import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Track endpoint
app.post("/api/track", (req, res) => {
  const { page, timestamp } = req.body;
  console.log("TRACK RECEIVED:", { page, timestamp });
  res.json({ status: "success", page, timestamp });
});

// Health check (optional)
app.get("/", (req, res) => {
  res.send("Wix Tracker API is running!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});