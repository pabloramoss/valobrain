import { Stack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import VideosContext from '../../../context/VideosContext';
import VideoItem from './VideoItem';

const VideoList = ()=> {
  const {videos} = useContext(VideosContext)

  return(
    <Stack spacing={6} maxHeight="88vh" mt="2px">
      {videos.map(video => <VideoItem key={video.videoId} video={video} />)}
    </Stack>
  )
}
export default VideoList