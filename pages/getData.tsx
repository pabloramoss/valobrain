import React, { useEffect, useState } from 'react';
import {Button, Input, Stack, Flex, Divider} from "@chakra-ui/react"
import axios from "axios"
import youtube from "../src/Youtube/youtube"
import {getDataFromYT, newObjVideo} from "../src/Youtube/getDataFromYT"
import {Video} from '../src/videos/types';
import postData from '../src/Youtube/postData';
import {dbConnect} from "../utils/mongoose"
import api from './api/api';
import { GetStaticProps } from 'next';

const initialStateVideo: Video = {
  etag: "",
  videoId: "",
  description: "",
  thumbnails: "",
  publishTime: "",
  title: "",
}
interface Props {
  videosDB: Video[];
}

const getData: React.FC<Props> = ({videosDB})=> {
  const [videosYT, setVideosYT] = useState<Video[]>([])
  const [videosMongo, setVideosMongo] = useState<Video[]>([])
  const [query, setQuery] = useState("")
  useEffect(()=>{
    setVideosMongo(videosDB)
  },[])

  const objectVideo: Video = {
    etag: "qSApgLa9Qqh_47Q9Q-kQLfF1zmE",
    videoId: "qhyKjS6qZco",
    description: "Micro strat sacada de Challengers 2021 Torreta en under heaven, nano ejambre en puerta y en servidor al contact de la torreta.",
    publishTime: "2021-12-22T18:30:45Z",
    thumbnails: "https://i.ytimg.com/vi/qhyKjS6qZco/mqdefault.jpg",
    title: "Valorant Micro defensa SAW Ascent A site Killjoy Setup",
  }

/*   const getData = async ()=> {
    const results = await getDataFromYT("haven")
    const data: Video[] = results.items
    console.log(typeof(results)) 
    console.log(results)
    console.log(data)
    console.log(typeof(data)) 
    setVideosSate(results)
    data.map( async (video) => {
      const newVideoForDB = newObjVideo(video)
      await postData(newVideoForDB)
    })
  } */
//---------------------------
const getVideosYT = async (e)=>{
  e.preventDefault()
  const resultsYT = await getDataFromYT(query)
  const resultsParse = resultsYT.items.map(item=>newObjVideo(item))
  setVideosYT(resultsParse)
}

useEffect(()=>{
  console.log("videos mongo: ",videosMongo)
  console.log("videos YT: ",videosYT)
},[videosMongo,videosYT])

  return(
    <Stack gap={4} w={600}>
      {/* <Button onClick={getData}>Obtener y guardar data</Button> */}
      {/* <Button onClick={()=>console.log(videosState)}>Ver estado</Button> */}
      <Button onClick={()=>postData(objectVideo)}>Ver estado</Button>
      <Divider />
      <form onSubmit={getVideosYT}>
        <Input type="text" onChange={(e)=>setQuery(e.target.value)} />
        <Button type='submit'>Obtener videos de youtube</Button>
      </form>
    </Stack>
  )
}
export default getData

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