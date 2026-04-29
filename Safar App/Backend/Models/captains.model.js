const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const captainSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    minLength: [3, "First name cant be less than 3 characters"],
  },
  lastName: {
    type: String,
    minLength: [3, "Last name cant be less than 3 characters"],
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minLength: [6, "Email cant be less than 6 characters"],
  },
  password: {
    type: String,
    required: true,
  },
  socketId: {
    type: String,
  },
  status: {
    type: String,
    required: true,
    enum: ["active", "inactive"],
    default: "inactive",
  },
  vehicle: {
    color: {
      type: String,
      required: true,
      minLength: [3, "Color cant be less than 3 characters"],
    },
    plate: {
      type: String,
      required: true,
      minLength: [3, "Plate cant be less than 3 characters"],
    },
    capacity: {
      type: Number,
      required: true,
      minLength: [1, "Capacity cant be less than 1"],
    },
    vehicleType: {
      type: String,
      required: true,
      enum: ["Car", "Bike", "Auto"],
    },
  },
  location: {
    lng: {
      type: Number,
    },
    lat: {
      type: Number,
    },
  },
});

captainSchema.methods.generateToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.JWT_KEY, {
    expiresIn: "24h",
  });
  return token;
};

captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
};

const Captain = mongoose.model("captains", captainSchema);
module.exports = Captain;
