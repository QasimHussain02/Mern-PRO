const { captainCreation } = require("../services/captains.services");
const Captain = require("../Models/captains.model");
async function createCaptain(req, res) {
  try {
    const { fullName, email, password, vehicle } = req.body;
    console.log(fullName);

    const { firstName, lastName } = fullName;
    console.log(firstName);

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
module.exports = { createCaptain };
