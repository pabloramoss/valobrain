import React, { useState, useContext, useEffect, FormEvent, ChangeEvent } from 'react';
import {Container, Input, Stack, Button} from "@chakra-ui/react"
import { FaSearch } from 'react-icons/fa';
import searchFuse from "../Searchbar/SearchFuse"
import VideosContext from "../../context/VideosContext"
import DatabaseContext from '../../context/DatabaseContext';

const Searchbar: React.FC = ()=> {
  const [query, setQuery] = useState("")
  const {setVideos} = useContext(VideosContext)
  const {database} = useContext(DatabaseContext)

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const results = searchFuse(database, query)
    const videosResults = results.map(result => result.item)
    setVideos(videosResults)
  }

  return(
    <Stack 
      py={3} 
      bg="gray.800" 
      pos="fixed" 
      w="100%"
    >
      <Container maxW="container.xl">
        <form onSubmit={handleSubmit}>
          <Stack direction="row">
            <Input placeholder='Buscar' type="search" color="white" value={query} onChange={(event: ChangeEvent<HTMLInputElement>) => setQuery(event.target.value)} />
            <Button aria-label='search' type='submit' colorScheme="gray" ><FaSearch /></Button>
          </Stack>
        </form>
      </Container>
    </Stack>
  )
}
export default Searchbar