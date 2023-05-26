import React from 'react'
import ReactDOM from 'react-dom/client'
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './theme'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './services/route'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode}/>
      <RouterProvider router = {router}/>
    </ChakraProvider>
  </React.StrictMode>,
)
