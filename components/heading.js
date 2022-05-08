import styles from '../styles/Home.module.css'
import { Heading } from '@chakra-ui/react'

export default function Heading_({ children }) {
  return (
    <Heading as="h1" fontSize={{ base: '18px', sm: '22px', md: '30px', lg: '36px', xl: '42px' }} className={styles.title}>
      {children}
    </Heading>
  )
}
