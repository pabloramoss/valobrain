import {dbConnect} from "../../utils/mongoose"
import Video from "../../models/Video"

dbConnect()

export default async (req, res) => {
  const {method, body, query: {id}} = req
  switch (method) {
    case "GET":
      try {
        const video = await Video.findById(id)
        if (!video) return res.status(404).json({msg: "Video not found"})
        return res.status(200).json(video)
      } catch (error) {
        return res.status(500).json({msg: error.message})
      }

    case "PUT":
      try {
        const video = await Video.findByIdAndUpdate(id, body, {
          new: true,
        })
        if (!video) return res.status(404).json({msg: "Video not found"})
        return res.status(200).json(video)
      } catch (error) {
        return res.status(500).json({msg: error.message})
      }
    case "DELETE":
      try {
        const deletedVideo = await Video.findByIdAndDelete(id)
        if (!deletedVideo) return res.status(404).json({msg: "Video not found"})
        return res.status(204).json()

      } catch (error) {
        return res.status(400).json({msg: error.message})
      }
    default:
      return res.status(400).json({msg: "this method is not supported"})
  }
}