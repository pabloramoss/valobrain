import { createContext, useState } from "react"

const VideosContext = createContext(null)
const initialVideos = []


const VideosProvider = ({children}) =>{
  const [videos, setVideos] = useState(initialVideos)
  
  const data = {
    videos,
    setVideos
  }
  return (
    <VideosContext.Provider value={data}>{children}</VideosContext.Provider>
  )
}

export {VideosProvider}
export default VideosContext