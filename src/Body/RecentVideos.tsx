import React, { useEffect } from 'react';
import {Container, Heading, Icon, Stack} from "@chakra-ui/react"
import VideoCard from './VideoCard';
import Cardtest from './Cardtest';
import { FaChevronLeft, FaChevronRight, } from 'react-icons/fa';
import getLatestVideos from './getLatestVideos';

const RecentVideos: React.FC = ()=> {
  const latestVideos = getLatestVideos()

  return(
    <Stack pt={10} spacing={5} maxW="100vw">
      <Stack direction="row" alignItems="center">
        <Heading ps={5} me={5} color="gray.400" fontSize="lg">Subidos recientemente</Heading>
        <Icon w={4} h={4} color="white" opacity={0.3} as={FaChevronLeft} />
        <Icon w={4} h={4} color="white" opacity={0.3} as={FaChevronRight} />
      </Stack>
      <Container gap={5} h="450px" minW={["260px","260px","260px","260px"]} maxW="container.md" overflowX="auto" sx={{
        '&::-webkit-scrollbar': {
          backgroundColor: `rgba(0, 0, 0, 0.00)`,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: `rgba(172, 172, 172, 0.0)`,
        },
      }}>
        <Stack spacing={5} direction="row">
          {latestVideos.map(item=> <Cardtest key={item.videoId} video={item} />)}
        </Stack>
        
      </Container>
    </Stack>
  )
}
export default RecentVideos