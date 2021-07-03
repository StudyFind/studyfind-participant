import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import "pure-react-carousel/dist/react-carousel.es.css";

import { Heading, Button, Text, Flex } from "@chakra-ui/react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
  Dot,
  DotGroup,
} from "pure-react-carousel";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";

import Yohan from "images/yohan.png";
import Andrew from "images/andrew.png";
import Vir from "images/vir.png";
import Typography from "material-ui/styles/typography";

function FoundingTeamSection() {
  const [isTablet, setIsTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const [isShort, setIsShort] = useState(false);

  // identify if window is compact
  const handleWindowSizeChange = () => {
    if (window.innerWidth < 300) {
      setIsPhone(true);
      setIsCompact(true);
      setIsTablet(false);
    } else if (window.innerWidth < 450) {
      setIsPhone(true);
      setIsTablet(false);
      setIsCompact(false);
    } else if (window.innerWidth < 800) {
      setIsTablet(true);
      setIsPhone(false);
      setIsCompact(false);
    } else {
      setIsPhone(false);
      setIsTablet(false);
      setIsCompact(false);
    }
    if (window.innerHeight < 675) {
      setIsShort(true);
    } else {
      setIsShort(false);
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
      {isPhone && (
        <CarouselBox>
          <Heading size={isCompact ? "xl" : "2xl"} lineHeight="1.25">
            <Text color="#387DFF">Founding Team</Text>
          </Heading>
          <CarouselProvider
            naturalSlideWidth={350}
            naturalSlideHeight={isShort ? 400 : 300}
            totalSlides={3}
            style={{ position: "relative" }}
          >
            <Slider>
              <Slide index={0}>
                <Flex direction="column" justify="space-evenly" align="center">
                  <strong>Yohan Jhaveri</strong>
                  <img
                    src={Yohan}
                    width={isPhone ? "150vh" : "250vh"}
                    style={{ margin: isPhone ? "" : "15px 0px" }}
                  />
                  Computer Science <br />
                  <Text color="#387DFF" fontWeight="bold">
                    Emory University
                  </Text>
                </Flex>
              </Slide>
              <Slide index={1}>
                <Flex direction="column" justify="space-evenly" align="center">
                  <strong>Andrew Garcia</strong>
                  <img
                    src={Andrew}
                    width={isPhone ? "150vh" : "250vh"}
                    style={{ margin: isPhone ? "" : "15px 0px" }}
                  />
                  Health Policy &amp; Management <br />
                  <Text color="#387DFF" fontWeight="bold">
                    Emory University
                  </Text>
                </Flex>
              </Slide>
              <Slide index={2}>
                <Flex direction="column" justify="space-evenly" align="center">
                  <strong>Vir Mittal</strong>
                  <img
                    src={Vir}
                    width={isPhone ? "150vh" : "250vh"}
                    style={{ margin: isPhone ? "" : "15px 0px" }}
                  />
                  Computer Science <br />
                  <Text color="#387DFF" fontWeight="bold">
                    Emory University
                  </Text>
                </Flex>
              </Slide>
            </Slider>
            <ButtonBack
              style={{ position: "absolute", top: "40%", left: "8%" }}
            >
              &lt;
            </ButtonBack>
            <ButtonNext
              style={{ position: "absolute", top: "40%", right: "8%" }}
            >
              &gt;
            </ButtonNext>
          </CarouselProvider>
          <div
            style={{
              backgroundColor: "#F8F9FB",
              padding: isPhone ? "5%" : "2%",
              borderRadius: "15px",
            }}
          >
            <Heading size={isPhone ? "xl" : "xl"} lineHeight="1.25">
              <Text color="#00C9A6">About Us</Text>
            </Heading>
            <Text fontSize={isPhone ? (isCompact ? "xs" : "sm") : "lg"}>
              StudyFind was founded by three co-founders who wanted to
              participate in clinical research trials but couldn't readily
              access and communicate with researchers!
              <br />
              <br />
              They set out to build a platform that caters to both Researchers
              and Study Volunteers.
            </Text>
          </div>
        </CarouselBox>
      )}

      {!isPhone && (
        <Box>
          <Heading size="2xl" lineHeight="1.25">
            <Text color="#387DFF">Founding Team</Text>
          </Heading>
          <Flex
            direction={isPhone ? "column" : "row"}
            justify="center"
            style={{
              gridGap: isPhone ? "20px" : "50px",
            }}
          >
            <Flex direction="column" justify="space-evenly" align="center">
              <strong>Yohan Jhaveri</strong>
              <img
                src={Yohan}
                width={isPhone ? "150vh" : "250vh"}
                style={{ margin: isPhone ? "" : "15px 0px" }}
              />
              Computer Science <br />
              <Text color="#387DFF" fontWeight="bold">
                Emory University
              </Text>
            </Flex>
            <Flex direction="column" justify="space-evenly" align="center">
              <strong>Andrew Garcia</strong>
              <img
                src={Andrew}
                width={isPhone ? "150vh" : "250vh"}
                style={{ margin: isPhone ? "" : "15px 0px" }}
              />
              Health Policy &amp; Management <br />
              <Text color="#387DFF" fontWeight="bold">
                Emory University
              </Text>
            </Flex>
            <Flex direction="column" justify="space-evenly" align="center">
              <strong>Vir Mittal</strong>
              <img
                src={Vir}
                width={isPhone ? "150vh" : "250vh"}
                style={{ margin: isPhone ? "" : "15px 0px" }}
              />
              Computer Science <br />
              <Text color="#387DFF" fontWeight="bold">
                Emory University
              </Text>
            </Flex>
          </Flex>
          <div
            style={{
              backgroundColor: "#F8F9FB",
              padding: isPhone ? "5%" : "2%",
              borderRadius: "15px",
            }}
          >
            <Heading size={isPhone ? "xl" : "xl"} lineHeight="1.25">
              <Text color="#00C9A6">About Us</Text>
            </Heading>
            <Text fontSize={isPhone ? "md" : "lg"}>
              StudyFind was founded by three co-founders who wanted to
              participate in clinical research trials but couldn't readily
              access and communicate with researchers!
              <br />
              <br />
              They set out to build a platform that caters to both Researchers
              and Study Volunteers.
            </Text>
          </div>
        </Box>
      )}
    </>
  );
}

const Box = styled.section`
  height: 100vh;
  padding: 50px;
  display: flex;
  grid-gap: 20px;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    grid-gap: 30px;
  }

  @media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1) and (min-height: 800px) {
    height: 75vh;
  }

  @media only screen and (max-aspect-ratio: 1/2) {
    height: 150vh;
  }
`;

const CarouselBox = styled.section`
  height: 100vh;
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;

  @media (max-height: 675px) {
    height: 120vh;
  }

  @media (max-aspect-ratio: 1/2) {
    height: 90vh;
  }
`;

export default FoundingTeamSection;
