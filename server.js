require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS
app.use(cors());

// API Endpoint
app.get("/", (req, res) => {
  res.json({
    email: "decnaly22@gmail.com.com", // Replace with your HNG12 registered email
    current_datetime: new Date().toISOString(),
    github_url: "https://github.com/Decnaly/hng-api", // Replace with your actual GitHub repo URL
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
