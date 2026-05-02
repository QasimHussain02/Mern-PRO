const express = require("express");
const router = express.Router();
const { verifyCaptainToken } = require("../middleware/middleware.auth");
const {
  createCaptain,
  loginCaptain,
  getProfile,
  logoutCaptain,
} = require("../controllers/captains.controller");
//     /api/captains
//Register
router.post("/register", createCaptain);
//Login
router.post("/login", loginCaptain);
//get profile
router.get("/profile", verifyCaptainToken, getProfile);
//logout
router.get("/logout", logoutCaptain);
module.exports = router;
