const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const VideoSchema = new Schema(
  {
    VideoTitle: { type: String, required: true },
    VideoDescription: { type: String, required: true },
    VideoLink: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const Video = mongoose.model("Video", VideoSchema);
module.exports = Video;
