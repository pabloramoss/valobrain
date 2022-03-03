import { GetStaticProps } from 'next';
import React, {useContext, useEffect, useState} from 'react';
import {Video} from "../src/videos/types"
import api from './api/api';
import {Container, Heading, Stack, Grid, Box, Input, Button, Text} from "@chakra-ui/react"
import Aside from "../src/Aside/Aside"
import Searchbar from "../src/Searchbar/Searchbar"
import Body from "../src/Body/Body"
import VideosContext from "../context/VideosContext"
import DatabaseContext from "../context/DatabaseContext"
import Fuse from "fuse.js";
import {dbConnect} from "../utils/mongoose"
/* import {collection, onSnapshot, query, orderBy} from "@firebase/firestore"
import {db} from "../firebase" */
import {getDataFromYT, newObjVideo} from "../src/Youtube/getDataFromYT"
interface Props {
  videosDB: Video[];
}

const IndexRoute: React.FC<Props> = ({videosDB})=> {
  const [query, setQuery] = useState("")
  const [data, setData] = useState()
  console.log("videos de mongo ",videosDB)
  const {database, setDatabase} = useContext(DatabaseContext)
  useEffect(()=>{
    setDatabase(videosDB)
    console.log("useEffect devuelve ",database)
  },[])
  console.log(database)

  const handleSubmit = async (e)=>{
    e.preventDefault()
    const videos = await getDataFromYT(query)
    console.log(videos)
    console.log(typeof(videos))
    setData(videos)
  }

  return(
    <Grid 
      gridTemplateAreas={{
        base: `
        "header header" 
        "body body"`, 
        sm: `
        "aside header" 
        "aside body"` 
        }} 
        gridTemplateColumns={{base:"60px 1fr"}} gridTemplateRows={{base: "60px 1fr"}}
      >
      <Box gridArea="header">
        <Searchbar />
      </Box>
      <Box gridArea="aside">
        <Aside />
      </Box>
      <Stack gridArea="body">
        <Body />
{/*         <form onSubmit={(e)=>handleSubmit(e)}>
          <Input placeholder='Query' onChange={e=>setQuery(e.target.value)} />
          <Button type='submit'>Consultar</Button>
        </form>
        <Text>{JSON.stringify(data)}</Text> */}
      </Stack>
    </Grid>
  )
}
export default IndexRoute

//Obtengo los videos
export const getStaticProps: GetStaticProps = async () =>{
  /* const videosDB = await api.mock.list() */
  const videosDB = await api.list()
  dbConnect()

  return {
    props: {
      videosDB
    }
  }
}