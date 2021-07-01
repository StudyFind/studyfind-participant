import React, { useState } from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, Flex } from "@chakra-ui/react";

function EntireTeamSection() {
  let [oneButton, setOneButton] = useState(false);

  const handleClick = () => {
    setOneButton(!oneButton);
  };

  return (
    <div
      style={{
        height: "20vw",
        padding: "50px",
        display: "flex",
        gridGap: "100px",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "#f8f9fb",
      }}
    >
      <Button
        variant="solid"
        padding="3.5vh"
        bgColor="#387DFF"
        textColor="#ffffff"
        _hover={{ bgColor: "#2D65CC" }}
        _active={{ bgColor: "#1C3F80" }}
        onClick={handleClick}
      >
        <Heading size="xl" lineHeight="1.25">
          <Text>Meet The Entire Team</Text>
        </Heading>
      </Button>
    </div>
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
