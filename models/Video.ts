import {Schema, model, models} from "mongoose"

const videoSchema = new Schema({
  videoId: {
    type: String,
    required: [true, "Please provide an ID for this video"],
  },
  title: {
    type: String,
    required: [true, "Please provide a title for this video"],
  },
  description: {
    type: String,
    required: [true, "Please provide a description for this video"],
  },
  publishTime: {
    type: String,
    required: [true, "Please provide a publishTime for this video"],
  },
  thumbnails: {
    type: Object,
    required: [true, "Please provide a thumbnails object for this video"],
  },
})
export default models.Video || model("Video", videoSchema)