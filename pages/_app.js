import dynamic from 'next/dynamic'
import '../styles/globals.css'
const App = dynamic(() => import('../components/app.js'))

export function reportWebVitals(metric) {
  console.log(metric);
}

function MyApp({ Component, pageProps }) {
  return (
    <App>
      <Component {...pageProps} />
    </App>
  )
}

export default MyApp
