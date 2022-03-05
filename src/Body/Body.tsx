import React, { useContext } from 'react';
import {Stack} from "@chakra-ui/react"
import Hero from "../Hero/Hero"
import VideoList from './VideoList/VideoList';
import LatestVideos from './LatestVideos';
import VideosContext from '../../context/VideosContext';
import RecentVideos from './RecentVideos';

const Body = ()=> {
  const {videos} = useContext(VideosContext)
  console.log(videos)

  return(
    <Stack bg='gray.800' alignItems="center" overflowY="auto" sx={{
      '&::-webkit-scrollbar': {
        width: '8px',
        borderRadius: '8px',
        backgroundColor: `rgba(0, 0, 0, 0.05)`,
      },
      '&::-webkit-scrollbar-thumb': {
        borderRadius: '8px',
        backgroundColor: `rgba(172, 172, 172, 0.2)`,
      },
    }}>
      {(videos.length)?
          <></>
          :
          <Hero />
      }
        {(videos.length)?
          <VideoList />
          :
          <RecentVideos />
      }
    </Stack>
  )
}
export default Body