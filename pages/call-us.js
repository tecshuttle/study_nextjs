import Link from 'next/link';
import styles from '../styles/Home.module.css'
import { Box } from '@chakra-ui/react'
import dynamic from 'next/dynamic'
const CallUs = dynamic(() => import('../components/call-us.js'))
const BuyerSupportBanner = dynamic(() => import('../components/buyerSupportBanner'))

export default function CallUs_() {
  return (
    <>
      <Box as="p" className={styles.normal} m="1em">
        <Link href="/">返回主页</Link>
      </Box>
      <BuyerSupportBanner />
      <CallUs />
    </>
  )
}