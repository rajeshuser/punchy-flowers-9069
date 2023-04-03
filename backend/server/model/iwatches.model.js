const mongoose = require("mongoose");

const iwatchSchema = mongoose.Schema(
  {
    name: String, 
    category: String, 
    image: String, 
    color: String, 
    battery : Number,
    watchSize: Number,
    waterResistant: Boolean,
    touchSensor: Boolean,
    watchWeight: Number,
    rating: Number
  },
  {
    versionKey: false,
  }
);

const IwatchModel = mongoose.model("iwatch", iwatchSchema);

module.exports = { IwatchModel };