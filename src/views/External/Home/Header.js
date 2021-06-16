import React, { useEffect, useState } from "react";
import { NavHashLink as HashLink } from "react-router-hash-link";
import {
  Heading,
  Flex,
  Box,
  Image,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import SFLogo from "images/logo.png";

function Header() {
  let [scrolledDown, setScrolledDown] = useState(false);

  return (
    <Box position="fixed" top="0" p="20px" w="100vw" zIndex="1">
      <Flex justifyContent="space-between">
        <HashLink to="/">
          <Flex align="center">
            <Image src={SFLogo} h="2rem" mr="10px" />
            <Heading fontSize="1.7rem">StudyFind</Heading>
          </Flex>
        </HashLink>
        <HashLink to="/auth">
          <Button size="lg" colorScheme="blue">
            Start Now
          </Button>
        </HashLink>
      </Flex>
    </Box>
  );
}

export default Header;
