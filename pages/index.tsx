import { GetStaticProps } from 'next';
import React, {useEffect, useState} from 'react';
import {Video} from "../src/videos/types"
import api from './api/api';
import {Container, Heading, Stack, Grid, Box, Input} from "@chakra-ui/react"
import Aside from "../src/Aside/Aside"
import Searchbar from "../src/Searchbar/Searchbar"
import Body from "../src/Body/Body"
import {collection, onSnapshot, query, orderBy} from "@firebase/firestore"
import {db} from "../firebase"

interface Props {
  videos: Video[];
}

const IndexRoute: React.FC<Props> = ({videos})=> {
  const [todos, setTodos] = useState([])

 /*  useEffect(()=>{
    const collectionRef = collection(db, "todos")

    const q = query(collectionRef, orderBy("timestamp", "desc"))
    const unsubscribe = onSnapshot(q, (querySnapshot)=>{
      setTodos(querySnapshot.docs.map(doc=> ({...doc.data(), id: doc.id, timestamp: doc.data().timestamp?.toDate().getTime() })))
    })
    console.log("lista todos ",todos)
    return unsubscribe
  }, []) */

  console.log(videos);
  return(
    <Grid 
      gridTemplateAreas={{
        base: `
        "aside header" 
        "aside body"` 
        }} 
        gridTemplateColumns={{base:"60px 1fr"}} gridTemplateRows={{base: "60px 1fr"}}
      >
      <Box gridArea="header">
        <Searchbar videos={videos} />
      </Box>
      <Box gridArea="aside">
        <Aside />
      </Box>
      <Stack gridArea="body">
        <ul>
          {todos.map(todo => <Heading key={todo.id}>{todo.title}</Heading>)}
        </ul>
        <Body />
      </Stack>
    </Grid>
  )
}
export default IndexRoute

//Obtengo los videos
export const getStaticProps: GetStaticProps = async () =>{
  const videos = await api.mock()

  return {
    props: {
      videos
    }
  }
}