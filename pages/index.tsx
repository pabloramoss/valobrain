import { GetStaticProps } from 'next';
import React, {useContext, useEffect, useState} from 'react';
import {VideoI} from "../src/videos/types"
import {Stack, Grid, Box} from "@chakra-ui/react"
import Searchbar from "../src/Searchbar/Searchbar"
import Body from "../src/Body/Body"
import DatabaseContext from "../context/DatabaseContext"
import {dbConnect} from "../utils/mongoose"
import Video from "../models/Video"
import {getDataFromYT} from "../src/Youtube/getDataFromYT"
interface Props {
  videosDB: VideoI[];
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
        "header header" 
        "body body"` 
        }} 
        gridTemplateColumns={{base:"60px 1fr"}} gridTemplateRows={{base: "60px 1fr"}}
      >
      <Box gridArea="header">
        <Searchbar />
      </Box>
      <Stack gridArea="body">
        <Body />
      </Stack>
    </Grid>
  )
}
export default IndexRoute

export const getStaticProps: GetStaticProps = async () =>{
  await dbConnect()

  //Obtengo los video
  const result = await Video.find({})
  const videosDB = result.map((doc) => {
    const video = doc.toObject()
    video._id = video._id.toString()
    return video
  })

  return { 
    props: { 
      videosDB
    }
  }
}