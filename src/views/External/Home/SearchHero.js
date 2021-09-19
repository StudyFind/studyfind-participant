import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, Flex, useMediaQuery, Image } from "@chakra-ui/react";

import Background from "images/web-hero-background.svg";
import SearchBar from "images/search-bar.gif";
import SearchInput from "views/Internal/FindStudies/SearchInput";
import { set } from "lodash";
import FocusFindStudies from "./FindStudiesSection/FocusFindStudies";

function SearchHero() {
  let focusContent = (
    <div className="focus-find-studies">
      <FocusFindStudies />
    </div>
  );
  let blurContent = (
    <ResponsiveHeading lineHeight="1.25">
      <Text color="#00C9A6">Sign up</Text>
      <Text color="#387DFF">For Clinical Trials with a</Text>
      <Text color="#387DFF">Simple Click of a Button</Text>
      <Text id="search"></Text>
    </ResponsiveHeading>
  );

  let [content, setContent] = useState(blurContent);
  let [focus, setFocus] = useState(false);

  return (
    <Box>
      <Flex justify="space-between" width="100%" gridGap="10px" marginTop="40px">
        <SearchInput
          onFocus={() => {
            setFocus(true);
            setContent(focusContent);
          }}
          onBlur={(e) => {
            setFocus(false);
            setContent(blurContent);
            console.log(e);
          }}
        />
      </Flex>
      {/* <SearchInput value={filters.search} onChange={handleFilters} /> */}
      {content}
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

const ImageBox = styled.section`
  margin: 5% 15%;
  @media (max-width: 625px) {
    margin: 7% 1.5%;
  }
`;

export default SearchHero;
