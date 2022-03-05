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
    AspectRatio,
    Stack,
    Button,
    ModalFooter
  } from '@chakra-ui/react'

const VideoCard = ({video}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const videoSrc = `https://www.youtube.com/embed/${video.videoId}`;

    return (
        <Stack spacing={{base:"8px",md:'24px'}} direction={{base:"column", md:"row"}}>
          <AspectRatio minWidth={{base:"100vw", sm:"400px"}}ratio={16/9}>
            <Image 
            src={video.thumbnails} 
            _hover={{cursor: "pointer"}}
            onClick={onOpen}
            />
          </AspectRatio>
          <Stack maxW={500}>
            <Heading 
            color="gray.200" 
            fontWeight={500}
            _hover={{cursor: "pointer"}}
            onClick={onOpen}
            fontSize={{base:"lg", md:"2xl"}} 
            pb={{base:"0", md:"15px"}}
            >{video.title}</Heading>
            <Text fontSize="sm" color="gray.400" display={{base:"none", md:"flex"}}>{video.description}</Text>
          </Stack>
            <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent maxW="940px" pb="15px">
            <ModalHeader fontSize="lg">{video.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <AspectRatio ratio={16 / 9}>
                <iframe src={videoSrc} allowFullScreen title="Video player" />
              </AspectRatio>
            </ModalBody>
          </ModalContent>
        </Modal>
        </Stack>
    )
};
export default VideoCard;