const mongoose = require("mongoose");

//create schema
const zoneschema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    desc: { type: String, required: true },
    image: { type: String },
    status: { type: String, default: "Pending" },
  },
  { timestamps: true }
);
module.exports = mongoose.model("Zone", zoneschema);
