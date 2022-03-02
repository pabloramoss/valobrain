import React from 'react';
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Box,
    Flex,
    Text,
    Image,
    Heading,
    AspectRatio
  } from '@chakra-ui/react'

const VideoItem = ({video , handleVideoSelect}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <Flex direction={{base:"column", md:"row"}} onClick={ () => handleVideoSelect(video)} pt="50px" className="video-image">
            <Box>
                <Image minWidth={{base:"100vw", md:"400px"}} onClick={onOpen} cursor="pointer" src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
            </Box>  
            <Box width={{base:"100%", md:"500px"}} ps="30px">
                <Heading color="white" onClick={onOpen} cursor="pointer" as='h2' fontSize={{base:"15px", md:"22px"}} pt={{base:"5px", md:"0"}} pb={{base:"0", md:"20px"}}>{video.snippet.title}</Heading>
                <Text display={{base:"none", md:"block"}} color="white">{video.snippet.description} </Text>
            </Box>
            <Modal isOpen={isOpen} size="xl" onClose={onClose}>
        <ModalOverlay />
        <ModalContent maxW="940px" pb="15px">
          <ModalHeader>{video.snippet.title}</ModalHeader>
          <ModalCloseButton />
        <Flex align="end">
          <ModalBody width={{sm:"400px", md:"600px", lg:"940px"}}>
            <AspectRatio ratio={16 / 9}>
              <iframe src={videoSrc} allowFullScreen title="Video player" />
            </AspectRatio>
          </ModalBody>
        </Flex>
        </ModalContent>
      </Modal>
        </Flex>
    )
};
export default VideoItem;