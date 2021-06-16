import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, Flex } from "@chakra-ui/react";

import Background from "images/web-hero-background.svg";
import SearchBar from "images/search-bar.gif";

function Hero() {
  return (
    <Box>
      <Flex
        direction="row"
        justify="center"
        style={{
          padding: "50px",
          width: "100%",
        }}
      >
        <HashLink smooth to={"/#search"}>
          <img src={SearchBar} width="600vh" />
        </HashLink>
      </Flex>
      <Heading size="2xl" lineHeight="1.25">
        <Text color="green.400">Sign up</Text>
        <Text color="blue.500">For Clinical Trials with a</Text>
        <Text color="blue.500">Simple Click of a Button</Text>
      </Heading>
    </Box>
  );
}

const Box = styled.section`
  height: 100vh;
  padding: 50px;
  display: flex;
  grid-gap: 60px;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  background: url(${Background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right top;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    grid-gap: 30px;
  }
`;

export default Hero;
