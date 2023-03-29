const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    fristName: { type: String, require: true },
    lastName: { type: String, require: true },
    birthday: { type: String, require: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    phoneNumber: { type: Number, require: true }
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
//     "birthday": 21-11-2000,
//     "email":"manju@gmail.com",
//     "password" :"manju",
//     "phoneNumber" : 8179066510
// }