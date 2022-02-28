import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app"
import {VideosProvider} from "../context/VideosContext"
import {DatabaseProvider} from "../context/DatabaseContext"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <ChakraProvider>
        <DatabaseProvider>
          <VideosProvider>
            <Component {...pageProps} />
          </VideosProvider>
        </DatabaseProvider>
      </ChakraProvider>
  )
}

export default App