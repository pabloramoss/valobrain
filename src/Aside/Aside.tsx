import React, {useState} from 'react';
import {Button, Box, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Icon, IconButton, Input, Stack, useDisclosure, Divider, Text} from "@chakra-ui/react"
import { FaBars } from 'react-icons/fa';
import { motion } from 'framer-motion'

const Aside = ()=> {
  const [asideWidth, setAsideWidth] = useState(60)
  const [footerOpacity, setFooterOpacity] = useState(0)
  const { isOpen, onOpen, onClose, onToggle } = useDisclosure()
  const btnRef = React.useRef()
  const MotionStack = motion(Stack)

  const handleClick = ()=>{
    onToggle();
    (asideWidth===60) ? setAsideWidth(260) : setAsideWidth(60);
    (footerOpacity===0) ? setFooterOpacity(1) : setFooterOpacity(0)
  }


  return(
    <MotionStack 
      bg="gray.600" 
      h="100vh" 
      w="60px"
      pos="fixed"
      animate={{ width: asideWidth }}
      transition={{ ease: "easeOut", duration: 0.4 }}
    >
      <Icon ms={4} mt={8} ref={btnRef} _hover={{cursor:"pointer"}} onClick={handleClick} as={FaBars} color="white" alignSelf="start" h={7} w={7} />
      <Stack py={5} height="100%" justifyContent="space-between">
        <Stack>
          <Text>icono</Text>
        </Stack>
        <MotionStack
        animate={{ opacity: footerOpacity }}
        alignItems="center"
        >
          <Divider />
          <Text color="gray.500">©{new Date().getFullYear()} Valobrain</Text>
        </MotionStack>
      </Stack>
    </MotionStack>
  )
}

export default Aside