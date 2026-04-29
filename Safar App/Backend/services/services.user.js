const User = require("../Models/model.user");

async function createUser(firstName, secondName, email, password) {
  try {
    if (!firstName || !email || !password) {
      throw new Error("Please fill the required fields");
      return;
    }
    const user = await User.create({
      firstName,
      secondName,
      email,
      password,
    });
    return user;
  } catch (err) {
    console.log("The user was failed to create " + err);
  }
}

module.exports = createUser;
