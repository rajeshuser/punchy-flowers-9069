const express=require("express")
const airpodsRouter=express.Router()
const {AirpodsModel}=require("../model/airpods.model")


airpodsRouter.get("/", async (req, res) => {
    // console.log(req.body);
    try {
      const airpods = await AirpodsModel.find({ userId: req.body.userId });
      res.status(200).send(airpods);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  airpodsRouter.post("/add", async (req, res) => {
    try {
      const airpod = new AirpodsModel(req.body);
      await airpod.save();
      res.status(200).send({ msg: "A new Airpods has been added" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  airpodsRouter.patch("/update/:airpodID", async (req, res) => {
    const { airpodID } = req.params;
    const payload = req.body;
    try {
      await AirpodsModel.findByIdAndUpdate({ _id: airpodID }, payload);
      res.status(200).send({ msg: "Airpod has been updated" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  airpodsRouter.delete("/delete/:airpodID", async (req, res) => {
    const { airpodID } = req.params;
    try {
      await AirpodsModel.findByIdAndDelete({ _id: airpodID });
      res.status(200).send({ msg: "Airpod has been deleted" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
module.exports={
    airpodsRouter
}