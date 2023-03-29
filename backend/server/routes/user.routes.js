const express = require("express");
const UserModel=require("../models/user.model")
const { hash } = require("bcryptjs");
const { compare } = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userRouter = express.Router();

//Registration
userRouter.post("/register", (req, res) => {
  try {
    const { firstName, lastName, birthday, email, password, phoneNumber } =
      req.body;
    hash(password, 5, async (err, hash) => {
      const user = new UserModel({
        firstName,
        lastName,
        birthday,
        email,
        password: hash,
        phoneNumber,
      });
      await user.save();
      res.status(200).send({ msg: "Registration Successful" });
    });
  } catch (err) {
    res.status(400).send({ msg: "Failed to Register" });
  }
});

//Login Part
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.findOne({ email });
    compare(password, user.password, (err, matched) => {
      if (matched) {
        res.status(200).send({
          msg: "Login Successful!",
          token: jwt.sign({ name: "products" }, "iphone"),
        });
      } else {
        res.status(400).send({ msg: "Login Unsuccessful!" });
      }
    });
  } catch (err) {
    res.status(400).send(err.message);
  }
});

module.exports = {
  userRouter,
};
