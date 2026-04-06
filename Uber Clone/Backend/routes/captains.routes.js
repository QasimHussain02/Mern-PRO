const express = require("express");
const router = express.Router();
const { createCaptain } = require("../controllers/captains.controller");

//Register
router.post("/register", createCaptain);
module.exports = router;
