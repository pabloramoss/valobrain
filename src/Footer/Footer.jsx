import React from "react";
import { Link, Flex, Heading } from '@chakra-ui/react';
import SocialMedia from "./SocialMedia";

const Footer = () => {

  return (
    <Flex direction="column" justifyContent="center" py={5} bgColor="#111111">
      <Heading my={5} color="white" textAlign="center" size="sm">VALO BRAIN</Heading>
      <SocialMedia />
    </Flex>
  );
};

export default Footer;