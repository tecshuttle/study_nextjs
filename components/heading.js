import styles from '../styles/Home.module.css'
import { Heading } from '@chakra-ui/react'

export default function Heading_(props) {
  return (
    <Heading as="h1" {...props} fontSize={{ base: '18px', sm: '22px', md: '30px', lg: '36px', xl: '42px' }} className={styles.title}>
      {props.children}
    </Heading>
  )
}
