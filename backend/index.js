const express = require("express");
const cors = require("cors");
const app = express();
const { connectdatabase } = require("./config/database");
const dotenv = require("dotenv");
const { registerUser, createInquiry } = require("./controller/controller");
dotenv.config();
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(
  cors({
    credentials: true,
    // origin: "https://blog24app.netlify.app",
    origin: process.env.ORIGIN_URL,
  })
);
connectdatabase();

app.get("/api/get", (req, res) => {
  res.status(200).json({
    success: true,
    message: "working root directory",
  });
});

app.post("/api/registration", registerUser);
app.post("/api/inquiry", createInquiry);

app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});
module.exports = app;
