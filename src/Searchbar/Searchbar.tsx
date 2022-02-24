import React, { useState } from 'react';
import {Container, Input, Stack, IconButton, Button, Icon} from "@chakra-ui/react"
import {Video} from "../videos/types"
import Fuse from "fuse.js"
import { FaSearch } from 'react-icons/fa';

interface Props {
  videos: Video[]
}

const Searchbar: React.FC<Props> = ({videos})=> {
  const [query, setQuery] = useState("")

  const fuse = new Fuse(videos, {
    keys: [
      "title",
      "description",
    ]
  })

  const handleSubmit = e => {
    e.preventDefault()
    const searchResults = fuse.search(query)
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