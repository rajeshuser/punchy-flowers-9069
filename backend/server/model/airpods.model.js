const mongoose = require("mongoose");

const airpodsSchema = mongoose.Schema(
  {
    name: String, 
    category: String, 
    image: String, 
    color: String,  
    battery : Number,
    touchSensor : Boolean,
    airpodWeight: Number,
    rating: Number
  },
  {
    versionKey: false,
  }
);

const AirpodsModel = mongoose.model("airpods", airpodsSchema);

module.exports = { AirpodsModel };


// {
//   "name": "AirPods 15", 
//   "category": "Airpods", 
//   "image": "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/MQTH3_VW_34FR+watch-41-alum-midnight-nc-8s_VW_34FR_WF_CO+watch-face-41-bhm-sport-loop_VW_34FR_WF_CO?wid=375&hei=356&trim=1%2C0&fmt=p-jpg&qlt=95&.v=1672773910529%2C1661971867144%2C1674108542685", 
//   "color": "Green",  
//   "battery" : 2300,
//   "touchSensor" : true,
//   "airpodWeight": 100,
//   "rating": 7.5
// }