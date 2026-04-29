const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const userRoute = require("./routes/routes.user");
const captainRoute = require("./routes/captains.routes");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:5173", credentials: true }));
app.use(cookieParser());

//user
app.use("/api/user", userRoute);
//captains
app.use("/api/captains", captainRoute);
app.get("/", (req, res) => {
  res.send("Hello world");
});

module.exports = app;
