import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import theme from "@bit/mik-technology.core.theme";

let body = theme.styles.global.body;
delete body.height;

const themeMy = extendTheme({
  ...theme,
  styles: {
    global: {
      body: body // redefine style without height attribute.
    }
  }
})

function App({ children }) {
  return (
    <ChakraProvider theme={themeMy}>
      {children}
    </ChakraProvider>
  )
}

export default App
