import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text } from "@chakra-ui/react";

import Yohan from "images/yohan.png";
import Andrew from "images/andrew.png";
import Vir from "images/vir.png";

function Board() {
  return (
    <Box id="board">
      <Heading size="2xl" lineHeight="1.25">
        <Text color="blue.500">Board</Text>
      </Heading>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          gridGap: "50px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          Yohan Jhaveri
          <img src={Yohan} width="250vh" />
          Computer Science <br />
          Emory University
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          Andrew Garcia
          <img src={Andrew} width="250vh" />
          Health Policy &amp; Management <br />
          Emory University
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-evenly",
          }}
        >
          Vir Mittal
          <img src={Vir} width="250vh" />
          Computer Science <br />
          Emory University
        </div>
      </div>
      <Heading size="2xl" lineHeight="1.25">
        <Text color="green.400">About Us</Text>
      </Heading>
      <Text fontSize="lg">
        StudyFind was founded by three co-foundrs who wanted to participate in
        clinical research trials but couldn&apos;t readily access and communicate
        with researchers!
        <br />
        <br />
        They set out to build a platform that caters to both Researchers and
        Study Volunteers.
      </Text>
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

export default Board;
