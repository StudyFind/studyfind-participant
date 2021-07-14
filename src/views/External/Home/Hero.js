import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import {
  Heading,
  Button,
  Text,
  Flex,
  useMediaQuery,
  Image,
} from "@chakra-ui/react";

import Background from "images/web-hero-background.svg";
import SearchBar from "images/search-bar.gif";

function Hero() {
  return (
    <Box>
      <SearchGifBox>
        <HashLink smooth to={"/#search"}>
          <SearchBarImage>
            <img src={SearchBar} width="100%" />
          </SearchBarImage>
        </HashLink>
      </SearchGifBox>
      <ResponsiveHeading lineHeight="1.25">
        <Text color="#00C9A6">Sign up</Text>
        <Text color="#387DFF">For Clinical Trials with a</Text>
        <Text color="#387DFF">Simple Click of a Button</Text>
        <Text id="search"></Text>
      </ResponsiveHeading>
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

  @media (min-aspect-ratio: 8/10) and (max-aspect-ratio: 1/1) {
    padding: 60px 30px 30px 30px;
    grid-gap: 30px;
    background-size: 150vw;
  }

  @media (max-aspect-ratio: 8/10) {
    padding: 60px 30px 30px 30px;
    grid-gap: 30px;
    background-size: 200vw;
  }

  @media (max-aspect-ratio: 47/100) {
    padding: 60px 25px 25px 25px;
    grid-gap: 25px;
    background-size: 300vw;
  }
`;

const ResponsiveHeading = styled(Heading)`
  font-size: 50px !important;

  @media (min-aspect-ratio: 8/10) and (max-aspect-ratio: 1/1) {
    font-size: 40px !important;
  }

  @media (max-aspect-ratio: 8/10) {
    font-size: 7vw !important;
  }

  @media (max-aspect-ratio: 47/100) {
    font-size: 7vw !important;
  }
`;

const SearchGifBox = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 50px;

  @media (max-width: 625px) {
    padding: 10% 0%;
  }
`;

const SearchBarImage = styled.section`
  width: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  margin: 0% 15%;

  @media (max-width: 625px) {
    width: 100%;
    margin: 0%;
  }
`;

export default Hero;
