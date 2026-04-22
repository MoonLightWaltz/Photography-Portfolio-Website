const express = require("express");
const cors = require("cors");
const connectDB = require("./server/db");

const app = express();

// Connect DB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/projects", require("./server/routes/projects"));
app.use("/api/auth", require("./server/routes/auth"));
app.use("/api/upload", require("./server/routes/upload"));

// Static folder (for images)
app.use("/uploads", express.static("uploads"));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
