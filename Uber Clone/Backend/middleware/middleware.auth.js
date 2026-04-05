const User = require("../Models/model.user");
const jwt = require("jsonwebtoken");
const blacklistedToken = require("../Models/model.blacklistedToken");
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
module.exports = { verifyToken };
