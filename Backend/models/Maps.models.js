const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MapsSchema = new Schema(
  {
    image: { type: String, required: true },
    link: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Maps = mongoose.model("Maps", MapsSchema);
module.exports = Maps;
