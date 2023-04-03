const mongoose = require("mongoose");

const storeSchema = mongoose.Schema(
  {
    name: String, 
    category: String, 
    image: String, 
    color: String, 
    phoneSize: String, 
    watchSize: String, 
    waterResistant: Boolean,
    battery : Number,
    rating: Number
  },
  {
    versionKey: false,
  }
);

const StoreModel = mongoose.model("store", storeSchema);

module.exports = { StoreModel };

// {    
//   "name": "Iphone 11", 
//   "category": "Mobile", 
//   "image": "https://www.apple.com/v/iphone-14/f/images/key-features/features/size/size_yellow__dnv9794q7loy_large.jpg", 
//   "color": "Green", 
//   "phoneSize": "Mini", 
//   "battery" : 5000,
//   "rating": 8
// }
