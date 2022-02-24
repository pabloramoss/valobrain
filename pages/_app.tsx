import React from "react"
import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from "next/app"
import {Provider as ReduxProvider} from "react-redux"
import store from "../src/redux/store"

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ReduxProvider store={store}>
      <ChakraProvider>
        <Component {...pageProps} />
      </ChakraProvider>
    </ReduxProvider>
  )
}

export default App