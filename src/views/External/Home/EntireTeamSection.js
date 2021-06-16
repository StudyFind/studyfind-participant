import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, Flex } from "@chakra-ui/react";

function EntireTeamSection() {
  return (
    <Box>
      <Heading size="2xl" lineHeight="1.25">
        <Text color="blue.500">Meet The Entire Team below:</Text>
      </Heading>
      <Flex
        direction="row"
        justify="center"
        align="center"
        style={{
          gridGap: "200px",
        }}
      >
        <div
          style={{
            width: "20vw",
          }}
        >
          <HashLink to={"/team#board"}>
            <Heading size="xl" lineHeight="1.25">
              <Text color="blue.500">National Advisory Board</Text>
            </Heading>
          </HashLink>
        </div>
        <div
          style={{
            width: "20vw",
          }}
        >
          <HashLink to={"/team#interns"}>
            <Heading size="xl" lineHeight="1.25">
              <Text color="green.400">Entire Team</Text>
            </Heading>
          </HashLink>
        </div>
      </Flex>
    </Box>
  );
}

const Box = styled.section`
  height: 100vh;
  padding: 50px;
  display: flex;
  grid-gap: 100px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #f8f9fb;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    grid-gap: 30px;
  }
`;

export default EntireTeamSection;
