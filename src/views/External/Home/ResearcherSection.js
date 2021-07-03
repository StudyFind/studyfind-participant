import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, useMediaQuery } from "@chakra-ui/react";

import CompactResearcher from "images/compact-researcher.svg";
import Researcher from "images/researcher-hero.svg";

import Footer from "./Footer";

function ResearcherSection() {
  const [isTablet, setIsTablet] = useState(false);
  const [is1000, setIs1000] = useState(false);
  const [isCompact, setIsCompact] = useState(false);

  // identify if window is compact
  const handleWindowSizeChange = () => {
    if (window.innerWidth < 300) {
      setIs1000(false);
      setIsTablet(false);
      setIsCompact(true);
    } else if (window.innerWidth < 800) {
      setIsTablet(true);
      setIs1000(false);
      setIsCompact(false);
    } else if (window.innerWidth < 1000) {
      setIs1000(true);
      setIsTablet(false);
      setIsCompact(false);
    } else {
      setIs1000(false);
      setIsTablet(false);
      setIsCompact(false);
    }
  };

  // check for window size change
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  // update if the window is compact
  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  return (
    <>
      <Flex
        direction={isTablet ? "column-reverse" : "row"}
        justify={isTablet ? "space-evenly" : "space-between"}
        align="center"
        height={isTablet ? "50vh" : "90vh"}
      >
        <Box>
          <HeadingTextBox>
            <Heading
              size={is1000 ? "xl" : isCompact ? "lg" : "2xl"}
              lineHeight="1.25"
            >
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
        <picture width="650vw">
          <source
            media="(max-width: 800px)"
            srcSet={CompactResearcher}
            width="500vw"
          />
          <img src={Researcher} width="680vw" />
        </picture>
      </Flex>
      <Footer />
    </>
  );
}

const Box = styled.section`
  padding: 50px 0px 50px 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 800px) {
    padding: 30px;
    grid-gap: 30px;
    margin-top: -50px;
  }
`;

const HeadingTextBox = styled.section`
  @media only screen and (max-width: 800px) {
    width: 100%;
  }
`;

const Flex = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  height: 90vh;

  @media only screen and (max-width: 800px) {
    flex-direction: column-reverse;
    justify-content: space-evenly;
  }

  @media only screen and (max-aspect-ratio: 8/10) and (min-aspect-ratio: 7/10) and (min-height: 1000px) {
    height: 50vh;
  }
`;

export default ResearcherSection;
