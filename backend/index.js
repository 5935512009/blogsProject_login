require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require('./routes/users');
const authRoutes = require('./routes/auth');
const blogRoutes = require('./routes/blog');

const app = express();

// Database Connection
connection();

// Middlewares
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/blog", blogRoutes);

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Server running on port ${port}`));
