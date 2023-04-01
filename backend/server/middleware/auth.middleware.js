const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, "iphone");
    if (decoded) {
      req.body.userID = decoded.userID;
      next();
    } else {
      res.status(400).send({ msg: "Please do Login Frist!" });
    }
  } else {
    res.status(400).send({ msg: "Please do Login Frist!" });
  }
};

module.exports = { auth };
