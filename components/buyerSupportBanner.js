import React from 'react';
import { useMediaQuery, Flex, Box, Img } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import theme from '@bit/mik-technology.core.theme';
import { Heading } from '@mik-technology/mik-ui.ui.heading';
import { Text } from '@mik-technology/mik-ui.ui.text';
import { Button } from '@mik-technology/mik-ui.ui.button';
import BuyerBannerImg from './BuyerBannerImg.png';
import BuyerBannerImgSM from './BuyerBannerImgSM.png';

function SellerSupportBanner() {
  const router = useRouter();
  const [is1024] = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  const [isMobile] = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);

  return (
    <Flex justifyContent="space-between" backgroundColor={theme.colors.green['100']} m="0 auto" maxW={theme.breakpoints.xl}>
      <Flex
        flexDir="column"
        p={{ lg: '45px', md: '40px', sm: '40px 24px', base: '40px 24px' }}
        minW={{ md: '500px' }}
        maxW={{ lg: '660px', md: '690px' }}
        justifyContent="space-between"
      >
        <Heading
          tagName={isMobile ? 'T5' : 'T3'}
          as={isMobile ? 'h5' : 'h3'}
          lineHeight={{ md: '48px', sm: '28px' }}
          fontSize={{ md: '36px', sm: '20px' }}
        >
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
      <Box display={{ lg: 'block', md: 'none', sm: 'none', base: 'none' }}>
        <Img
          src={is1024 ? BuyerBannerImgSM.src : BuyerBannerImg.src}
          h="361px"
          objectFit="cover"
          alt="seller support banner image"
        />
      </Box>
    </Flex>
  );
}

export default SellerSupportBanner;
