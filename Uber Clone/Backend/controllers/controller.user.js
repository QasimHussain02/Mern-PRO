const createUser = require("../services/services.user");
const User = require("../Models/model.user");
async function registerUser(req, res) {
  const { fullName, email, password } = req.body;
  const { firstName, secondName } = fullName;
  const repeatedEmail = User.find({ email });
  if (repeatedEmail) {
    res.json({ message: "Cant use repeated email" });
    return;
  }
  const hashedPassword = await User.hashPassword(password);
  const user = await createUser(firstName, secondName, email, hashedPassword);
  const token = user.createToken();
  res.status(201).json({ token, user });
}

module.exports = { registerUser };
