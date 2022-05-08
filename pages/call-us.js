import dynamic from 'next/dynamic'
const ChakraProvider = dynamic(() =>
  import('@chakra-ui/react').then((mod) => mod.ChakraProvider)
)
const CallUs = dynamic(() => import('../components/call-us.js'))

export default function CallUs_() {
  return (
    <ChakraProvider>
      <CallUs />
    </ChakraProvider>
  )
}