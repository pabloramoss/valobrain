import React from 'react';
import {AspectRatio, Heading, Stack, Text} from "@chakra-ui/react"

const VideoCard = ()=> {

  return(
    <Stack>
      <AspectRatio maxW="400px" ratio={16/9}>
        <iframe
          title="naruto"
          src='https://www.youtube.com/embed/QhBnZ6NPOY0'
          allowFullScreen
        />
      </AspectRatio>
      <Stack px={4}>
        <Heading color="white" fontSize={22}>Naruto SHipodei</Heading>
        <Text color="white">Esta es la desciprcion del video</Text>
      </Stack>
    </Stack>
  )
}
export default VideoCard