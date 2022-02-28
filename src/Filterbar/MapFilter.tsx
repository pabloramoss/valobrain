import React, { useContext, useState } from 'react';
import VideosContext from '../../context/VideosContext';
import {Button} from "@chakra-ui/react"
import {Video} from "../videos/types"
import searchFuse from "../Searchbar/SearchFuse"
import Fuse from "fuse.js";
import config from "../config"

const MapFilter: React.FC = ()=> {
  const {videos, setVideos} = useContext(VideosContext)
  //Renderizar videos
  
  return(
    <div>
      {config.maps.map(item => <Button key={item} onClick={()=>searchFuse(videos, item)}>{item}</Button>)}
      {/* <Button onClick={()=>searchFuse(videos, " ")}>icebox</Button> */}
    </div>
  )
}
export default MapFilter