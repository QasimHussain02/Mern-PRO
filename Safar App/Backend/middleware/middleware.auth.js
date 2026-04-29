const User = require("../Models/model.user");
const jwt = require("jsonwebtoken");
const blacklistedToken = require("../Models/model.blacklistedToken");
const Captain = require("../Models/captains.model");
async function verifyToken(req, res, next) {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    console.log(token);

    if (!token) {
      return res.json({ message: "unauthorized" });
    }
    const blacklistedTokens = await blacklistedToken.findOne({ token });
    if (blacklistedTokens) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    // console.log(decoded);
    const user = await User.findById(decoded.id);
    if (!user) {
      return res.status(401).json({ message: "user not found" });
    }
    req.user = user;
    return next();
  } catch (err) {
    return res.status(401).json({ message: "Unauthorized hai" });
  }
}
async function verifyCaptainToken(req, res, next) {
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
    if (!token) {
      return res.status(404).json({ message: "Token is undefined" });
    }
    const blackListedToken = blacklistedToken.findOne({ token });
    if (blacklistedToken) {
      res.status(401).json({ message: "Unauthorized" });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded) {
      return res.status(401).json({ message: "Token is not verified" });
    }
    const user = await Captain.findById(decoded._id);
    if (!user) {
      return res.status(401).json({ message: "User is unauthorized" });
    }
    req.user = user;
    return next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}
module.exports = { verifyToken, verifyCaptainToken };
