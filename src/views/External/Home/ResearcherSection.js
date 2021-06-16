import React from "react";
import styled from "styled-components";
import { HashLink } from "react-router-hash-link";

import { Heading, Button, Text, Flex } from "@chakra-ui/react";
import { QuestionIcon } from "@chakra-ui/icons";
import { SocialIcon } from "react-social-icons";

import Background from "images/adj-researcher-hero.png";

function ResearcherSection() {
  return (
    <>
      <Box>
        <div style={{ width: "50vw" }}>
          <Heading size="2xl" lineHeight="1.25">
            <Text color="#00C9A6">To access our</Text>
            <Text color="#387DFF">Researcher Portal Click Below</Text>
            <HashLink to="/auth">
              <Button size="lg" colorScheme="green">
                Click Here &gt;&gt;
              </Button>
            </HashLink>
          </Heading>
        </div>
      </Box>
      <Flex
        justify="space-between"
        style={{ backgroundColor: "#377DFF", padding: "15px 25px" }}
      >
        <div>
          <Text color="white">
            Feedback <QuestionIcon />{" "}
          </Text>
        </div>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/company/studyfind/"
            fgColor="white"
            style={{ height: 25, width: 25, margin: "0px 3px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.facebook.com/studyfindco/"
            fgColor="white"
            style={{ height: 25, width: 25, margin: "0px 3px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.youtube.com/channel/UCqOfwBbtyfMg-Hog0tj30qQ"
            fgColor="white"
            style={{ height: 25, width: 25, margin: "0px 3px" }}
            target="_blank"
          />
          <SocialIcon
            url="https://www.instagram.com/studyfindco/?hl=en"
            fgColor="white"
            style={{ height: 25, width: 25, margin: "0px 3px" }}
            target="_blank"
          />
        </div>
      </Flex>
    </>
  );
}

const Box = styled.section`
  height: 95vh;
  padding: 50px;
  display: flex;
  grid-gap: 60px;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background: url(${Background});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: right top;

  @media only screen and (max-width: 600px) {
    padding: 30px;
    grid-gap: 30px;
  }
`;

export default ResearcherSection;
