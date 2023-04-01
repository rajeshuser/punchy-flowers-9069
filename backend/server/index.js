const express = require("express");

const cors = require("cors");
const { connection } = require("./config/db");
const { userRouter } = require("./Routes/User.Route");
const { productsRouter } = require("./routes/products.route");
require("dotenv").config();

const app = express();

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("Home Page");
});

app.use("/users", userRouter);
app.use("/products", productsRouter);

app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("Connected to DB");
  } catch (error) {
    console.log(" Cannot Connected to DB");
    console.log(error);
  }
  console.log(`Running the server at ${process.env.port}`);
});
