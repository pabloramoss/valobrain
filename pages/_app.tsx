import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app"
import {VideosProvider} from "../context/VideosContext"
import {DatabaseProvider} from "../context/DatabaseContext"
import Footer from "../src/Footer/Footer"
import theme from "../theme"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
      <ChakraProvider theme={theme}>
        <DatabaseProvider>
          <VideosProvider>
            <Component {...pageProps} />
            <Footer />
          </VideosProvider>
        </DatabaseProvider>
      </ChakraProvider>
  )
}

export default App