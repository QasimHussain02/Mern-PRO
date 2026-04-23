const { captainCreation } = require("../services/captains.services");
const Captain = require("../Models/captains.model");

const modelBlacklistedToken = require("../Models/model.blacklistedToken");
async function createCaptain(req, res) {
  try {
    const { fullName, email, password, vehicle } = req.body;
    // console.log(fullName);

    const { firstName, lastName } = fullName;
    // console.log(firstName);

    const { color, plate, capacity, vehicleType } = vehicle;
    const hashPassword = await Captain.hashPassword(password);
    const captain = await captainCreation({
      firstName,
      lastName,
      email,
      password: hashPassword,
      color,
      plate,
      capacity,
      vehicleType,
    });
    const token = captain.generateToken();
    res.cookie("token", token);
    res
      .status(201)
      .json({ captain, token, message: "Captain created Successfully" });
  } catch (err) {
    res.json({ message: err.message });
  }
}
async function loginCaptain(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "Email and password are required",
      });
    }
    const user = await Captain.findOne({ email }).select("+password");
    if (!user) throw new Error("Invalid Email");
    const passwordMatch = await user.comparePassword(password);
    if (!passwordMatch) {
      return res.status(401).json({
        message: "Invalid email or password",
      });
    }
    user.password = undefined;
    const token = user.generateToken();
    res.cookie("token", token);
    res
      .status(200)
      .json({ user, token, message: "User is logged in successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}
async function getProfile(req, res) {
  const user = req.user;
  res.status(200).json({ user, message: "Here is your profile" });
}
async function logoutCaptain(req, res) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await modelBlacklistedToken.create({ token });
  res.clearCookie("token");
  res.status(200).json({ message: "Logged out successfully" });
}
module.exports = { createCaptain, loginCaptain, getProfile, logoutCaptain };
