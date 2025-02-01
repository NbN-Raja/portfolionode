import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
const PORT = process.env.PORT || 3000;

// Fix __dirname for ES modules
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

// Serve static files from the "public" folder
// app.use(express.static(path.join(__dirname, "public")));

// Simple API route
app.get("/", (_, res) => {
  res.json({ message: "Hello, welcome to my portfolio API!" });
});

app.get("/hello", (req, res) => res.json({ message: `Hello, ${req.query.name}!` }));
// Start the server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});
