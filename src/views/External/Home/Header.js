import React from "react";
import { NavHashLink as HashLink } from "react-router-hash-link";
import { Heading, Flex, Box, Image } from "@chakra-ui/react";
import SFLogo from "images/logo.png";

function Header() {
  return (
    <Box position="fixed" top="0" p="50px" w="100vw">
      <HashLink to="/">
        <Flex align="center">
          <Image src={SFLogo} h="2rem" mr="10px" />
          <Heading fontSize="1.7rem">StudyFind</Heading>
        </Flex>
      </HashLink>
    </Box>
  );
}

export default Header;
