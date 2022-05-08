import React from 'react';
import { Center, Box, Flex, useMediaQuery } from '@chakra-ui/react';
import theme from '@bit/mik-technology.core.theme';
import { Heading } from '@mik-technology/mik-ui.ui.heading';
import { Text } from '@mik-technology/mik-ui.ui.text';
import { IconPhoneCall } from '@tabler/icons';

const iconContainerStyleProps = {
  h: '48px',
  w: '48px',
  borderRadius: '50%',
  alignItems: 'center',
  justifyContent: 'center',
  mr: '6px',
  _hover: { cursor: 'pointer' },
};

export default function CallUs() {
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  return (
    <>
      <Center>
        <Heading
          tagName={isMobile ? 'T5' : 'T4'}
          as={isMobile ? 'h5' : 'h4'}
          mt="54px"
          mb="13px"
          fontSize={{ md: '24px', sm: '20px' }}
        >
          Still Not Finding What You Need?
        </Heading>
      </Center>
      <Center mr="40px" mb="61px">
        <Flex {...iconContainerStyleProps}>
          <Box as={IconPhoneCall} w="32px" color="#cf1f2e" />
        </Flex>
        <Text tagName={isMobile ? 'B-2' : 'A-1'} fontSize={{ sm: '16px', base: '14px' }}>
          Call Us at 1-800-MICHAELS
        </Text>
      </Center>
    </>
  )
}