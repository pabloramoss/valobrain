import React from 'react';
import {Stack, Heading, Button, Link, Icon} from "@chakra-ui/react"
import {QuerySearchProvider} from "../../context/QueryContext"
import {FaShare} from "react-icons/fa";

const Hero: React.FC = ()=> {

  return(
    <Stack h="350px" w="100%" backgroundImage="url('https://imgsvc.trackercdn.com/url/height(1000),quality(40)/https%3A%2F%2Ftrackercdn.com%2Fcdn%2Ftracker.gg%2Fvalorant%2Fimages%2Fvalorant-bg.jpg/image.jpg')" backgroundRepeat="no-repeat" backgroundSize="100%">
      <Stack maxW={500} spacing={10} height="100%" justifyContent="space-around" ps={10}>
        <Heading color="white" fontSize="2xl" fontWeight={800} lineHeight={10}>Encuentra la micro strat en función del agente, mapa o habilidad.</Heading>
        <Stack display={{base: "none", md:"flex"}}>
          <Heading color="white" fontSize="lg" fontWeight={500}>Si tienes alguna micro que consideres interesante puedes enviarnos el link.</Heading>
          <Link _hover={{textDecoration: "none"}} href="https://twitter.com/messages/compose?recipient_id=1466505334898376708&text=Too%20rukoo" isExternal>
            <Button colorScheme="teal" size="sm" ><Icon pe="5px" as={FaShare} w={6} h={6} color="white" />Contáctame</Button>
          </Link>
        </Stack>
      </Stack>
      <QuerySearchProvider>
        {/* <AgentFilter />
        <MapFilter />
        <SideFilter /> */}
      </QuerySearchProvider>
    </Stack>
  )
}
export default Hero