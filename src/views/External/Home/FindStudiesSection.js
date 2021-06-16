import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text } from "@chakra-ui/react";
import MapView from "views/Internal/FindStudies/MapView";

import MapElement from "images/temp-map.png";

function FindStudiesSection() {
  return (
    <Box id="search">
      <Heading size="xl" lineHeight="1.25">
        Find Studies
      </Heading>
      <img src={MapElement} />
    </Box>
  );
}

const Box = styled.section`
  height: 100vh;
  padding: 100px 50px 50px 50px;
  display: flex;
  grid-gap: 60px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #f8f9fb;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    grid-gap: 30px;
  }
`;

export default FindStudiesSection;
