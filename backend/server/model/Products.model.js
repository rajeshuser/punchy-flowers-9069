//schema
const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  name: { type: "string", required: true },
  category: { type: "string", required: true },
  image: { type: "string", required: true },
  color: { type: "string", required: true },
  phoneSize: { type: "number", required: true },
  watchSize: { type: "number", required: true },
  strapMaterial: { type: "string", required: true },
  shape: { type: "string", required: true },
  body: { type: "string", required: true },
  waterResistant: { type: "boolean", required: true },
  camera: { type: "number", required: true },
  battery: { type: "number", required: true },
  touchSensor: { type: "boolean", required: true },
  faceLock: { type: "boolean", required: true },
  display: { type: "string", required: true },
  storage: { type: "number", required: true },
  phoneWeight: { type: "number", required: true },
  watchWeight: { type: "number", required: true },
  airpodWeight: { type: "number", required: true },
  connectivity: { type: "number", required: true },
  generation: { type: "number", required: true },
  rating: { type: "number", required: true },
  bandSize: { type: "string", required: true },
});

const ProductsModel = mongoose.model("Products", productSchema);

module.exports = { ProductsModel };
