import { Stack, Heading } from '@chakra-ui/react';
import React from 'react';
import VideoCard from './VideoCard';

const LatestVideos: React.FC = ()=> {

  return(
    <Stack py={55}>
      <Stack>
        <Heading fontSize={20} opacity={0.6} color="white">Más recientes</Heading>
        <Stack gap={5} direction="row">
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </Stack>
      </Stack>
    </Stack>
  )
}
export default LatestVideos