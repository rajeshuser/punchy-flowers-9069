const express=require("express")
const iwatchesRouter=express.Router()
const {IwatchModel}=require("../model/iwatches.model")


iwatchesRouter.get("/", async (req, res) => {
    // console.log(req.body);
    try {
      const iwatches = await IwatchModel.find({ userId: req.body.userId });
      res.status(200).send(iwatches);
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  iwatchesRouter.post("/add", async (req, res) => {
    try {
      const iwatch = new IwatchModel(req.body);
      await iwatch.save();
      res.status(200).send({ msg: "A new Watch has been added" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  iwatchesRouter.patch("/update/:iwatchID", async (req, res) => {
    const { iwatchID } = req.params;
    const payload = req.body;
    try {
      await IwatchModel.findByIdAndUpdate({ _id: iwatchID }, payload);
      res.status(200).send({ msg: "Watch has been updated" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
  iwatchesRouter.delete("/delete/:iwatchID", async (req, res) => {
    const { iwatchID } = req.params;
    try {
      await IwatchModel.findByIdAndDelete({ _id: iwatchID });
      res.status(200).send({ msg: "Watch has been deleted" });
    } catch (err) {
      res.status(400).send({ msg: err.message });
    }
  });
  
module.exports={
    iwatchesRouter
}