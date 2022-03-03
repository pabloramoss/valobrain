import React, {useRef} from 'react';
import {Icon, Stack, useDisclosure, Divider, Text} from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa';
import {motion, useCycle} from "framer-motion"

const Aside = ()=> {
  /* const btnRef = useRef() */
  const MotionStack = motion(Stack)
  const [open, cycleOpen] = useCycle( "animationClose", "animationOpen");

const asideVariants = {

  animationOpen: {
    width: 80,
    transition: {
      width: {
        duration: 0.25,
        ease: "easeOut"
      }
    }
  },
  animationClose: {
    width: 260,
    transition: {
      width: {
        duration: 0.25,
        ease: "easeIn"
      }
    }
  }
}

  return(
    <Stack 
      bg="gray.600" 
      h="100vh" 
      display={{base: "none", sm:"flex"}}
/*       pos="fixed"
      animate={open}
      variants={asideVariants} */

    >
      <Icon ms={4} mt={8} /* ref={btnRef} */ _hover={{cursor:"pointer"}} as={FaBars} color="white" alignSelf="start" h={7} w={7} onClick={()=> cycleOpen()} />
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