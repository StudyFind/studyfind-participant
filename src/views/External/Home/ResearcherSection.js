import React, { useEffect } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, useMediaQuery } from "@chakra-ui/react";

import ResearcherImage from "images/researcher.svg";
import Background from "images/researcher-hero.svg";
import Pixel from "images/pixel.svg";

import Footer from "./Footer";

function ResearcherSection() {
  let isCompact = useMediaQuery("(max-width: 750px)");
  let image;

  useEffect(() => {
    if (isCompact) {
      image = <img src={ResearcherImage} />;
    } else {
      image = <img src="" />;
    }
  });

  return (
    <>
      <Box>
        {image}
        <HeadingTextBox>
          <Heading size="2xl" lineHeight="1.25">
            <Text color="#00C9A6">To access our</Text>
            <Text color="#387DFF">Researcher Portal Click Below</Text>
            <HashLink to="/auth">
              <Button
                size="lg"
                marginTop="2vh"
                bgColor="#00C9A6"
                textColor="#ffffff"
                _hover={{ bgColor: "#00967D" }}
                _active={{ bgColor: "#004A3E" }}
              >
                Click Here &gt;&gt;
              </Button>
            </HashLink>
          </Heading>
        </HeadingTextBox>
      </Box>
      <Footer />
    </>
  );
}

const Box = styled.section`
  height: 95vh;
  padding: 50px;
  display: flex;
  grid-gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: url(${Background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media only screen and (max-width: 1060px) {
    padding: 30px;
    grid-gap: 30px;
    background-size: 500px;
  }

  @media only screen and (max-width: 750px) {
    background: none;
  }
`;

const HeadingTextBox = styled.section`
  width: 40vw;

  @media only screen and (max-width: 750px) {
    width: 100%;
  }
`;

export default ResearcherSection;
