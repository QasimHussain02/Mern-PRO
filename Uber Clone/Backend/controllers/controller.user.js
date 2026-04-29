const createUser = require("../services/services.user");
const User = require("../Models/model.user");
const blTokens = require("../Models/model.blacklistedToken");
//sign up
async function registerUser(req, res) {
  const { fullName, email, password } = req.body;
  const { firstName, secondName } = fullName;
  const repeatedEmail = await User.findOne({ email });
  console.log(repeatedEmail);

  if (repeatedEmail) {
    return res.status(409).json({ message: "Can't use repeated email" });
  }
  const hashedPassword = await User.hashPassword(password);
  const user = await createUser(firstName, secondName, email, hashedPassword);
  const token = user.createToken();
  res.status(201).json({ token, user });
}
//login
async function loginUser(req, res) {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      res.status(400).json({ message: "Password and email cant be emtpy" });
    }
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      res.status(401).json({ message: "Invalid email" });
    } else {
      const loggedIn = await user.comparePassword(password);
      if (loggedIn) {
        const token = user.createToken();
        res.cookie("token", token);

        res.status(200).json({
          user,
          token,
          message: "The user is successfully logged in ",
        });
      } else {
        res.status(401).json({ message: "Invalid password" });
      }
    }
  } catch (err) {
    console.log("Failed to login user " + err);
  }
}
//profile
function getProfile(req, res) {
  return res.status(200).json({ user: req.user, message: "User found" });
}
//logut
async function logoutUser(req, res) {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  res.clearCookie("token");

  await blTokens.create({ token });

  res.status(200).json({ message: "User logged out successfully" });
}
module.exports = { registerUser, loginUser, getProfile, logoutUser };
