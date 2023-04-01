const express = require("express");
const { ProductsModel } = require("../model/Products.model");

const productsRouter = express.Router();

productsRouter.get("/", async (req, res) => {
  try {
    const sortParam = req.query.sort; // get sorting parameter from query string
    const orderParam = req.query.order; // get ordering parameter from query string

    const sortOrder = orderParam === "desc" ? -1 : 1; // determine the sort order based on the order parameter

    const products = await ProductsModel.find().sort({
      [sortParam]: sortOrder,
    }); // sort products if a sort parameter was provided, using the sort order

    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
productsRouter.get("/:_id", async (req, res) => {
  //send only one product
  try {
    const product = await ProductsModel.findById(req.params._id);
    res.send(product);
  } catch (err) {
    res.send({ msg: "Something went wrong", error: err.message });
  }
});

module.exports = { productsRouter };
