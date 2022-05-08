import '../styles/globals.css'
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

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={themeMy}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
