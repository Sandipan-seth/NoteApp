const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = async () => {
  mongoose.connect(process.env.MONGO_URI);
  mongoose.connection.on("connected", () => {
    console.log("MongoDB connected successfully");
  });
  mongoose.connection.on("error", (err) => {
    console.log("MongoDB connection failed", err);
  });
};

module.exports = { connectDB };