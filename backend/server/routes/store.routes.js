const express=require("express")
const storeRouter=express.Router()
const {StoreModel}=require("../model/store.model")


storeRouter.get("/", async (req, res) => {
    // console.log(req.body);
    try {
      const stores = await StoreModel.find({ userId: req.body.userId });
      res.status(200).send(stores);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  storeRouter.post("/add", async (req, res) => {
    try {
      const store = new StoreModel(req.body);
      await store.save();
      res.status(200).send({ msg: "A new Store item has been added" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  storeRouter.patch("/update/:storeID", async (req, res) => {
    const { storeID } = req.params;
    const payload = req.body;
    try {
      await StoreModel.findByIdAndUpdate({ _id: storeID }, payload);
      res.status(200).send({ msg: "Store has been updated" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  storeRouter.delete("/delete/:storeID", async (req, res) => {
    const { storeID } = req.params;
    try {
      await StoreModel.findByIdAndDelete({ _id: storeID });
      res.status(200).send({ msg: "Store has been deleted" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
module.exports={
    storeRouter
}