import React, { useContext, useState } from 'react';
import VideosContext from '../../context/VideosContext';
import QuerySearchContext from '../../context/QueryContext';
import {Button} from "@chakra-ui/react"
import {Video} from "../videos/types"
import searchFuse from "../Searchbar/SearchFuse"
import Fuse from "fuse.js";
import config from "../config"

const AgentFilter: React.FC = ()=> {
  const {videos, setVideos} = useContext(VideosContext)
  const {querySearch, setQuerySearch,  querySearchAgent, setQuerySearchAgent,} = useContext(QuerySearchContext)
  //Renderizar videos
  const handleSearch = (agent)=>{
    setQuerySearchAgent(agent)
    setQuerySearch(querySearch + querySearchAgent)
    console.log("la query es: ", querySearch)
    searchFuse(videos, querySearch)

  }
  
  return(
    <div>
      {config.agents.map(item => <Button key={item} onClick={()=>handleSearch(item)}>{item}</Button>)}
      {/* <Button onClick={()=>searchFuse(videos, "")}>agent</Button> */}
    </div>
  )
}
export default AgentFilter