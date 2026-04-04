const mongoose = require("mongoose");

async function connectDb() {
  try {
    await mongoose.connect(process.env.DB_CONNECT);
    console.log("DATABASE connected successfully");
  } catch (err) {
    console.log("Database connection failed " + err);
  }
}
module.exports = connectDb;
