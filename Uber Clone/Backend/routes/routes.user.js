const express = require("express");
const router = express.Router();
const userController = require("../controllers/controller.user");
const { verifyToken } = require("../middleware/middleware.auth");
// api/user/
//sign up
router.post("/register", userController.registerUser);
//login
router.post("/login", userController.loginUser);
//profile
router.get("/profile", verifyToken, userController.getProfile);
//logout
router.get("/logout", verifyToken, userController.logoutUser);
module.exports = router;
