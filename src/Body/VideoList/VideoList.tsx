import { Heading, Stack } from '@chakra-ui/react';
import React, { useContext } from 'react';
import VideosContext from '../../../context/VideosContext';
import VideoItem from './VideoItem';

const VideoList = ()=> {
  const {videos} = useContext(VideosContext)

  return(
    <Stack spacing={6} h="88vh" mt={30} pb={10}>
      <Heading color="white" fontSize={25} fontWeight={600} opacity={0.6}>{videos.length} videos</Heading>
      {videos.map(video => <VideoItem key={video.videoId} video={video} />)}
    </Stack>
  )
}
export default VideoList