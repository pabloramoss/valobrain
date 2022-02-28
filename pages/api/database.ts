
import {dbConnect} from "../../utils/mongoose"
import Video from "../../models/Video"

dbConnect()

export default async function handler(req, res){

  const {method, body} = req

  switch (method) {
    case "GET":
      try {
        const videos = await Video.find()
        console.log(videos)
        return res.status(200).json(videos)

      } catch (error) {
        return res.status(500).json({error: error.message})
      }
    case "POST":
      try {
        const newVideo = new Video(body) //crea un objeto nuevo con el body que le pasemos
        const savedVideo = await newVideo.save() //se guarda el objeto en la base de datos
        return res.status(201).json(savedVideo)

      }catch (error) {
        return res.status(500).json({error: error.message})
      }

    default:
      return res.status(400).json({msg: "this method is not supported"})

  }
  
}
