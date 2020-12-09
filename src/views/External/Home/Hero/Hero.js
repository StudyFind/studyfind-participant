import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Heading, Button, Text } from "components";

import Background from "images/microscope.jpg";

function Hero() {
  return (
    <Box>
      <Heading size="2xl" lineHeight="1.2">
        We help optimize your
        <Text color="blue.500"> participant recruitment </Text>
      </Heading>
      <Link to="/auth">
        <Button size="lg" colorScheme="blue">
          Start Now
        </Button>
      </Link>
    </Box>
  );
}

const Box = styled.section`
  height: 100vh;
  padding: 50px;
  display: flex;
  grid-gap: 60px;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  background: url(${Background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    grid-gap: 30px;
  }
`;

export default Hero;
