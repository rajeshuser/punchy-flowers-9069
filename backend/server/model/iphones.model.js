const mongoose = require("mongoose");

const iphoneSchema = mongoose.Schema(
  {
    name: String, 
    category: String, 
    image: String, 
    color: String, 
    phoneSize: String, 
    camera: String,
    battery : Number,
    phoneWeight: Number,
    rating: Number
  },
  {
    versionKey: false,
  }
);

const IphoneModel = mongoose.model("iphone", iphoneSchema);

module.exports = { IphoneModel };