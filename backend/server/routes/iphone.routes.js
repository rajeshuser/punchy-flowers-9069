const express=require("express")
const iphoneRouter=express.Router()
const {IphoneModel}=require("../model/iphones.model")


iphoneRouter.get("/", async (req, res) => {
    // console.log(req.body);
    try {
      const iphones = await IphoneModel.find({ userId: req.body.userId });
      res.status(200).send(iphones);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  iphoneRouter.post("/add", async (req, res) => {
    try {
      const iphone = new IphoneModel(req.body);
      await iphone.save();
      res.status(200).send({ msg: "A new Iphone has been added" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  iphoneRouter.patch("/update/:iphoneID", async (req, res) => {
    const { iphoneID } = req.params;
    const payload = req.body;
    try {
      await IphoneModel.findByIdAndUpdate({ _id: iphoneID }, payload);
      res.status(200).send({ msg: "Iphone has been updated" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  iphoneRouter.delete("/delete/:iphoneID", async (req, res) => {
    const { iphoneID } = req.params;
    try {
      await IphoneModel.findByIdAndDelete({ _id: iphoneID });
      res.status(200).send({ msg: "Iphone has been deleted" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
module.exports={
    iphoneRouter
}