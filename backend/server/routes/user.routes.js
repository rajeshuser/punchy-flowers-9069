const express = require("express");
const { UserModel } = require("../model/user.model");
const { hash, compare } = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

//Regitration Part
userRouter.post("/register", async (req, res) => {
  try {
    const { fristName,  lastName,  birthday, email, password, phoneNumber } = req.body;
    hash(password, 10, async (err, hash) => {
      const user = new UserModel ({fristName,lastName,birthday,email,password: hash,phoneNumber });
      await user.save();
      res.status(200).send({ msg: "Registration successful" });
    });
  } catch (err) {
    res.status(400).send({ msg: "Registration Failed" });
  }
});

//Login Part
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    // console.log(user);
    compare(password, user.password, (err, matched) => {
      if (matched) {
        res.status(200).send({
          msg: "Login Successful",
          token: jwt.sign({ id: user._id }, "iphone"),
        });
      } else {
        res.status(400).send({ msg: "Login Failed!" });
      }
    });
  } catch (err) {
    console.log(false);
    res.send(false);
  }
});

module.exports = { userRouter };
