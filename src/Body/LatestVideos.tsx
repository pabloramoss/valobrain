import { Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import VideoCard from './VideoCard';

const LatestVideos: React.FC = ()=> {

  return(
    <Stack>
      <Heading fontSize={20} opacity={0.6} color="white">Más recientes</Heading>
      <Stack gap={5} direction="row" h="600px">
        <VideoCard />
        <VideoCard />
        <VideoCard />
      </Stack>
    </Stack>
  )
}
export default LatestVideos