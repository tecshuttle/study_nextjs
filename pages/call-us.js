import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const CallUs = dynamic(() => import('../components/call-us.js'))

export default function CallUs_() {
  return (
    <>
      <Box as="p" className={styles.normal} mt="1em" ml="1em">
        <Link href="/">Call Us</Link>
      </Box>
      <CallUs />
    </>
  )
}