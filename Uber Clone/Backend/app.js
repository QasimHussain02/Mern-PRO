const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/routes.user");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use("/api/user", userRoute);
app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
