import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const fonts = {
  heading: 'Roboto, sans-serif',
  body: 'Roboto, sans-serif'
}

const theme = extendTheme({ fonts })

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider theme={theme} >
     <App />
    </ChakraProvider>
  </React.StrictMode>,
)
