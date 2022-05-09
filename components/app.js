import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from "@bit/mik-technology.core.theme";
delete theme.styles.global.body.height; // fix the bug: footer hidden on iphone.

function App({ children }) {
  return (
    <ChakraProvider theme={theme}>
      {children}
    </ChakraProvider>
  )
}

export default App
