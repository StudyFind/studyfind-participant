import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, Flex } from "@chakra-ui/react";

import Yohan from "images/yohan.png";
import Andrew from "images/andrew.png";
import Vir from "images/vir.png";

function FoundingTeamSection() {
  const [isTablet, setIsTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // identify if window is compact
  const handleWindowSizeChange = () => {
    if (window.innerWidth < 450) {
      setIsPhone(true);
      setIsTablet(false);
    } else if (window.innerWidth < 800) {
      setIsTablet(true);
      setIsPhone(false);
    } else {
      setIsPhone(false);
      setIsTablet(false);
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
          StudyFind was founded by three co-founders who wanted to participate
          in clinical research trials but couldn't readily access and
          communicate with researchers!
          <br />
          <br />
          They set out to build a platform that caters to both Researchers and
          Study Volunteers.
        </Text>
      </div>
    </Box>
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

  @media (min-aspect-ratio: 6/10) and (max-aspect-ratio: 1/1) {
    height: 75vh;
  }

  @media only screen and (max-width: 450px) {
    height: 150vh;
  }
`;

export default FoundingTeamSection;
