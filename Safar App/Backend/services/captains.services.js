const Captain = require("../Models/captains.model");
async function captainCreation({
  firstName,
  lastName,
  email,
  password,
  color,
  plate,
  capacity,
  vehicleType,
}) {
  if (
    !firstName ||
    !lastName ||
    !email ||
    !password ||
    !color ||
    !plate ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error("Required fields missing");
  }
  const emailAlreadyExists = await Captain.findOne({ email }).select(
    "+password",
  );
  if (emailAlreadyExists) {
    throw new Error("Email Already Exists");
  }
  const captain = await Captain.create({
    firstName,
    lastName,
    email,
    password,
    vehicle: {
      color,
      plate,
      capacity,
      vehicleType,
    },
  });
  return captain;
}

module.exports = { captainCreation };
