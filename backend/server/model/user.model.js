const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fristName: String, 
    lastName: String, 
    birthday: String, 
    email: String, 
    password: String, 
    phoneNumber: Number, 
  },
  {
    versionKey: false,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };

// {
//     "firstName" :"Manju",
//     "lastName" : "Sai",
//     "birthday": "21-11-2000",
//     "email":"manju@gmail.com",
//     "password" :"manju",
//     "phoneNumber" : 8179066510
// }