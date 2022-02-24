import React from 'react';
import {Heading, Stack} from "@chakra-ui/react"
import Hero from "../Hero/Hero"
import VideoCard from "../Body/VideoCard"

interface Props {}

const Body: React.FC<Props> = ()=> {

  return(
    <Stack bg='gray.800' alignItems="center">
      <Hero />
      <Stack>
        <Heading fontSize={20} opacity={0.6} color="white">Más recientes</Heading>
        <Stack gap={5} direction="row" h="600px">
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </Stack>
      </Stack>
      {`<Body />`}
    </Stack>
  )
}
export default Body