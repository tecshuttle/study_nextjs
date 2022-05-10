import React from 'react';
import { Flex, Box, Center } from '@chakra-ui/react';
import theme from '@bit/mik-technology.core.theme';
import LeftText from './left-text'
import RightImg from './right-img'

function BuyerSupportBanner() {
  return (
    <Flex justifyContent="space-between" backgroundColor={theme.colors.green['100']} m="0 auto" maxW={theme.breakpoints.xl} >
      <Box flex={2} maxH='382px'>
        <LeftText />
      </Box>
      <Center flex={1.2} display={{ lg: 'block', md: 'block', sm: 'none', base: 'none' }}>
        <RightImg />
      </Center>
    </Flex>
  );
}

export default BuyerSupportBanner;
