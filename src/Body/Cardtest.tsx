import { Heading, Stack, Image, Badge, Flex, Icon, Text } from '@chakra-ui/react';
import React from 'react';
import { FaClock } from "react-icons/fa"


const Cardtest: React.FC = ()=> {

  return(
    <Stack minW={250} spacing={4} rounded={10} p={2} boxShadow="xl" border="solid white 1px" justifyContent="space-around">
      <Image rounded={10} src='https://via.placeholder.com/300x200' />
      <Heading color="white" fontSize="lg" fontWeight={500}>Valorant Micro Ataque g2 Ascent site B</Heading>
      <Flex>
        <Badge bg="gray.600" rounded={5}>
          <Stack direction="row">
            <Icon color="black.500" h={5} w={5} as={FaClock} />
            <Text color="black" fontSize={13} alignSelf="center">1:02</Text>
          </Stack>
        </Badge>
      </Flex>
    </Stack>
  )
}
export default Cardtest