import React from "react";
import styled from "styled-components";
import { Box, Text, Button, Avatar, Badge, IconButton, Tooltip } from "@chakra-ui/react";
import { FaClock, FaPhone, FaFilter, FaComment } from "react-icons/fa";

function StudyRow({ study, participant }) {
  const statusColors = {
    interested: "gray",
    screened: "purple",
    consented: "cyan",
    accepted: "green",
    rejected: "red",
  };

  return (
    <Row>
      {/* <Text color="gray.500">{study.id}</Text> */}
      <Title fontWeight="500" mr="auto">
        {study.title}
      </Title>
      <Badge size="sm" colorScheme={statusColors[participant.status]}>
        {participant.status}
      </Badge>
      <Badge size="sm" colorScheme={statusColors[participant.status]}>
        December 4th, 2021 {participant.enrolledAt}
      </Badge>
      <Buttons>
        <Button size="sm" colorScheme="blue">
          Consent
        </Button>
        <Button size="sm" colorScheme="teal">
          Survey
        </Button>
        <Button size="sm" colorScheme="orange">
          Reminders
        </Button>
        <Button size="sm" colorScheme="purple">
          Messages
        </Button>
      </Buttons>
    </Row>
  );
}

const Title = styled(Text)`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 100%; /* fallback */
  -webkit-line-clamp: 1; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  padding: 15px;

  border-bottom: 1px solid #f1f2f3;

  &:last-child {
    border-bottom: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  width: 369px;
  grid-gap: 10px;
`;

export default StudyRow;
