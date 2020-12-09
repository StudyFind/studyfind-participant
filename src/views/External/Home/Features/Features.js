import React from "react";
import styled from "styled-components";

import { Box, Pill, Heading, Subheading } from "views/External/Home/styles";

import PostStudies from "images/post-studies.svg";
import SelectParticipants from "images/select-participants.svg";
import TrackRecruitment from "images/track-recruitment.svg";

import Feature from "./Feature";

function Features() {
  return (
    <Box id="features">
      <Pill>Features</Pill>
      <Heading>Find Participants Effectively</Heading>
      <Subheading color="secondary">
        Transform your participant recruitment process using StudyFind
      </Subheading>
      <FeatureList>
        <Feature
          image={PostStudies}
          heading="Post Studies"
          description="Post basic study information along with key eligibility criteria and an additional screening survey."
        />

        <Feature
          image={SelectParticipants}
          heading="Select Participants"
          description="Review responses from interested participants, and approve or reject them based on their responses."
        />

        <Feature
          image={TrackRecruitment}
          heading="Track Recruitment"
          description="Access data through a dashboard view for each study containing important information about recruitment."
        />
      </FeatureList>
    </Box>
  );
}

const FeatureList = styled.div`
  display: flex;
  grid-gap: 40px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 0px;
`;

export default Features;
