import React, {useRef} from 'react';
import {Icon, Stack, useDisclosure, Divider, Text} from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa';

const Aside = ()=> {
  /* const btnRef = useRef() */

  return(
    <Stack 
      bg="gray.600" 
      h="100vh" 
      w="60px"
      pos="fixed"
    >
      <Icon ms={4} mt={8} /* ref={btnRef} */ _hover={{cursor:"pointer"}} as={FaBars} color="white" alignSelf="start" h={7} w={7} />
      <Stack py={5} height="100%" justifyContent="space-between">
        <Stack>
          <Text>icono</Text>
        </Stack>
        <Stack
        alignItems="center"
        >
          <Divider />
          <Text color="gray.500">©{new Date().getFullYear()} Valobrain</Text>
        </Stack>
      </Stack>
    </Stack>
  )
}

export default Aside