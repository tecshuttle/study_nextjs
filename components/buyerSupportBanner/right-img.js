import React from 'react';
import { Img } from '@chakra-ui/react';
import BuyerBannerImg from './BuyerBannerImg.png';

function RightImg() {
  return (
    <Img
      src={BuyerBannerImg.src}
      objectFit="cover"
      m="0 0 0 auto"
      h="100%"
      maxH='382'
      alt="seller support banner image"
    />
  );
}

export default RightImg;
