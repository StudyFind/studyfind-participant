import React from "react";
import styled from "styled-components";

function Feature({ image, heading, description }) {
  return (
    <Box>
      <Icon src={image} />
      <Heading>{heading}</Heading>
      <Description>{description}</Description>
    </Box>
  );
}

const Box = styled.div`
  padding: 20px 0;
  width: 280px;
  flex-basis: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 30px 0;
  }
`;

const Icon = styled.img`
  width: 7rem;
  margin-bottom: 20px;
`;

const Heading = styled.h5`
  margin-bottom: 2px;
`;

const Description = styled.p`
  text-align: center;
  color: #77838f;
  line-height: 1.7;
`;

export default Feature;
