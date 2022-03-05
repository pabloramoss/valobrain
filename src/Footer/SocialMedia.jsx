import React from "react";
import { HStack, Link, Icon } from '@chakra-ui/react';
import { FaYoutube, FaTwitter, FaTiktok} from "react-icons/fa";

const SocialMedia = ()=> {

  return (
    <HStack spacing={4} id='Proyectos' alignItems="center" justifyContent="center">
      <Link href="/">
        <Icon _hover={{color:"red.500"}} h={5} w={5} color="white" as={FaTiktok} />
      </Link>
      <Link href="/">
        <Icon _hover={{color:"red.500"}} h={5} w={5} color="white" as={FaYoutube} />
      </Link>
      <Link href="/">
        <Icon _hover={{color:"red.500"}} h={5} w={5} color="white" as={FaTwitter} />
      </Link>
    </HStack>
  );
};

export default SocialMedia;