import React, { useContext } from 'react';
import {Stack} from "@chakra-ui/react"
import Hero from "../Hero/Hero"
import VideoList from './VideoList/VideoList';
import VideosContext from '../../context/VideosContext';
import RecentVideos from './RecentVideos';

const Body = ()=> {
  const {videos} = useContext(VideosContext)
  console.log(videos)

  return(
    <Stack bg='gray.800' alignItems="center">
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