import youtube from "./youtube"

const getDataFromYT = async (query) =>{
  const response = await youtube.get('/search',{
      params: {
      q: query
      }
  })
  const videos = response.data
  console.log(videos)
  return videos
}
//response.data.items array de videos

const newObjVideo = (objVideo) => {
  const video = {
    videoId: objVideo.id.videoId,
    title: objVideo.snippet.title,
    description: objVideo.snippet.description,
    publishTime: objVideo.snippet.publishTime,
    thumbnails: objVideo.snippet.thumbnails.medium.url,
    etag: objVideo.etag,
  }
  return video
}
//El etag se puede utilizar para verificar si un elemento fue modificado

export {getDataFromYT, newObjVideo}