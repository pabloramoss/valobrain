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
    etag: objVideo.etag,
    videoId: objVideo.id.videoId,
    description: objVideo.snippet.description,
    publishTime: objVideo.snippet.publishTime,
    thumbnails: objVideo.snippet.thumbnails.medium.url,
    title: objVideo.snippet.title,
  }
  return video
}
//El etag se puede utilizar para verificar si un elemento fue modificado

export {getDataFromYT, newObjVideo}