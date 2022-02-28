import React from 'react';
import {Stack, Image} from "@chakra-ui/react"
import AgentFilter from '../Filterbar/AgentFilter';
import MapFilter from '../Filterbar/MapFilter';
import SideFilter from '../Filterbar/SideFilter';
import {QuerySearchProvider} from "../../context/QueryContext"

const Hero: React.FC = ()=> {

  return(
    <Stack h="350px" w="100%" bg="white">
      <QuerySearchProvider>
        <AgentFilter />
        <MapFilter />
        <SideFilter />
      </QuerySearchProvider>
    </Stack>
  )
}
export default Hero