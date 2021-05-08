import React from "react";
import styled from "styled-components";

import { Link } from "components";
import { Heading, Button, Text } from "@chakra-ui/react";

import Background from "images/microscope.jpg";

function Hero() {
  return (
    <Container>
      <Heading size="2xl" lineHeight="1.25">
        We help you find relevant
        <Text color="blue.500">research studies</Text>
      </Heading>
      <Link to="/auth" isWrapper>
        <Button size="lg" colorScheme="blue">
          Start Now
        </Button>
      </Link>
    </Container>
  );
}

const Container = styled.section`
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
