const express = require("express");
const cors = require("cors");
const app = express();
const { connectdatabase } = require("./config/database");
const dotenv = require("dotenv");
const { registerUser, createInquiry } = require("./controller/controller");
dotenv.config();
app.use(
  cors({
    methods: ["GET", "POST"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));

connectdatabase();

app.get("/api/get", (req, res) => {
  res.status(200).json({
    success: true,
    message: "working root directory",
  });
});
app.post("/api/somerandom", (req, res) => {
  return res.status(200).json({
    message: "givem me",
  });
});
app.post("/api/registration", registerUser);
app.post("/api/inquiry", createInquiry);

app.listen(3000, () => {
  console.log(`app listening on port 3000`);
});
module.exports = app;
