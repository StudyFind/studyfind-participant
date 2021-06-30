import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, Flex } from "@chakra-ui/react";

import Yohan from "images/yohan.png";
import Andrew from "images/andrew.png";
import Vir from "images/vir.png";

function FoundingTeamSection() {
  return (
    <Box>
      <Heading size="2xl" lineHeight="1.25">
        <Text color="#387DFF">Founding Team</Text>
      </Heading>
      <Flex
        direction="row"
        justify="center"
        style={{
          gridGap: "50px",
        }}
      >
        <Flex direction="column" justify="space-evenly">
          <strong>Yohan Jhaveri</strong>
          <img src={Yohan} width="250vh" style={{ margin: "15px 0px" }} />
          Computer Science <br />
          <Text color="blue.500" fontWeight="bold">
            Emory University
          </Text>
        </Flex>
        <Flex direction="column" justify="space-evenly">
          <strong>Andrew Garcia</strong>
          <img src={Andrew} width="250vh" style={{ margin: "15px 0px" }} />
          Health Policy &amp; Management <br />
          <Text color="blue.500" fontWeight="bold">
            Emory University
          </Text>
        </Flex>
        <Flex direction="column" justify="space-evenly">
          <strong>Vir Mittal</strong>
          <img src={Vir} width="250vh" style={{ margin: "15px 0px" }} />
          Computer Science <br />
          <Text color="blue.500" fontWeight="bold">
            Emory University
          </Text>
        </Flex>
      </Flex>
      <div
        style={{
          backgroundColor: "#F8F9FB",
          padding: "2%",
          borderRadius: "15px",
        }}
      >
        <Heading size="2xl" lineHeight="1.25">
          <Text color="#00C9A6">About Us</Text>
        </Heading>
        <Text fontSize="lg">
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
  justify-content: center;
  align-items: center;
  text-align: center;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    grid-gap: 30px;
  }
`;

export default FoundingTeamSection;
