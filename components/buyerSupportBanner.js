import React from 'react';
import { useMediaQuery, Flex, Box, Center, Img } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import theme from '@bit/mik-technology.core.theme';
import Heading from '../components/heading.js';
import { Text } from '@mik-technology/mik-ui.ui.text';
import { Button } from '@mik-technology/mik-ui.ui.button';
import BuyerBannerImg from './BuyerBannerImg.png';

function BuyerSupportBanner() {
  const router = useRouter();
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Flex justifyContent="space-between" backgroundColor={theme.colors.green['100']} m="0 auto" maxW={theme.breakpoints.xl} >
      <Box flex={2} maxH='382px'>
        <Flex flexDir="column" justifyContent='space-around' p="1.5em" h="100%" maxW="680px">
          <Heading style={{ textAlign: 'left', fontFamily: 'Inter', fontWeight: 900 }}>
            Do you have questions about being a seller? We have answers!
          </Heading>
          <Text
            tagName={isMobile ? 'C-1' : 'Overall'}
            style={{ marginTop: '24px', marginBottom: '32px' }}
          >
            Click here to get answers to all of youre store front questions, from creating
            and accessing your dashboard, to setting up and posting projects, and even
            understanding marketing basics.
          </Text>
          <Button
            variant="primary"
            size="small"
            w="212px"
            onClick={() => {
              router.push('/seller-care');
            }}
          >
            <Text tagName="TX6">I NEED SELLER HELP!</Text>
          </Button>
        </Flex>
      </Box>
      <Center flex={1.2} display={{ lg: 'block', md: 'block', sm: 'none', base: 'none' }}>
        <Img
          src={BuyerBannerImg.src}
          objectFit="cover"
          m="0 0 0 auto"
          h="100%"
          maxH='382'
          alt="seller support banner image"
        />
      </Center>
    </Flex>
  );
}

export default BuyerSupportBanner;
