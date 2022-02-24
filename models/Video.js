import mongoose from "mongoose"

const videoSchema = new mongoose.Schema({
  videoId: {
    type: String,
    required: [true, "Please provide an ID for this video"],
  },
  snippet: {
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
  }
})
export default mongoose.models.Video || mongoose.model("Video", videoSchema)