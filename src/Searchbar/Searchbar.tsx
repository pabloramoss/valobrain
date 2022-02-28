import React, { useState, useContext } from 'react';
import {Container, Input, Stack, Button} from "@chakra-ui/react"
import { FaSearch } from 'react-icons/fa';
import searchFuse from "../Searchbar/SearchFuse"
import VideosContext from "../../context/VideosContext"
import DatabaseContext from '../../context/DatabaseContext';

const Searchbar: React.FC = ()=> {
  const [query, setQuery] = useState("")
  const {videos, setVideos} = useContext(VideosContext)
  const {database} = useContext(DatabaseContext)

  const handleSubmit = e => {
    e.preventDefault()
    const results = searchFuse(database, query)
    setVideos(results)
    console.log("el searchbar devuelve", videos)
    //utilizar redux o context para enviar el resultado al componente que renderiza la lista de videos
    //Debe actualizar el estado global de la variable que guarda la lista de videos como resultado de la busqueda
  }

  return(
    <Stack 
      py={3} 
      bg="gray.800" 
      pos="fixed" 
      w="100%"
    >
      <Container maxW="container.xl">
        <form onSubmit={e=>handleSubmit(e)}>
          <Stack direction="row">
            <Input placeholder='Buscar' color="white" onChange={e => setQuery(e.target.value)} />
            <Button aria-label='search' type='submit' colorScheme="gray" ><FaSearch /></Button>
          </Stack>
        </form>
      </Container>
    </Stack>
  )
}
export default Searchbar