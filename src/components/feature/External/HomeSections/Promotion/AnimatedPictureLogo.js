import React from 'react';
import logo from "images/homepage/animatedlogo.png";
import { Box, Image } from '@chakra-ui/react';
import { useDetectDevice } from 'hooks';

const AnimatedPictureLogo = () => {
    const { isPhone, isTablet } = useDetectDevice();
    return (
      <Box mb={isPhone || isTablet ? 50 : 0}>
        <Image src={logo} w={isPhone || isTablet ? "100%" : "80%"} />
      </Box>
    );
};

export default AnimatedPictureLogo;