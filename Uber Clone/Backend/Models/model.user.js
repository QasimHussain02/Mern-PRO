const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      minLength: [3, "First Name cant be less than 3 letters"],
    },
    secondName: {
      type: String,
      minLength: [3, "Second Name cant be less than 3 letters"],
    },
    email: {
      type: String,
      unique: true,
      required: true,
      minLength: [5, "Email cant be less than 5 letters"],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    socketId: {
      type: String,
    },
  },
  { timestamps: true },
);
userSchema.methods.createToken = function () {
  if (!process.env.JWT_KEY) {
    throw new Error("Jwt key not defined");
  }
  const token = jwt.sign({ id: this._id }, process.env.JWT_KEY, {
    expiresIn: "7d",
  });
  return token;
};
userSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};
userSchema.statics.hashPassword = async function (password) {
  const hashed = await bcrypt.hash(password, 10);
  return hashed;
};

const User = mongoose.model("user", userSchema);
module.exports = User;
