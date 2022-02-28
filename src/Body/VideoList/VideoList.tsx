import { Heading } from '@chakra-ui/react';
import React, { useContext } from 'react';
import VideosContext from '../../../context/VideosContext';

const VideoList = ()=> {
  const {videos} = useContext(VideosContext)

  return(
    <div>
      {videos.map(video => <Heading color="white" key={video.videoId}>{video.title}</Heading>)}
    </div>
  )
}
export default VideoList