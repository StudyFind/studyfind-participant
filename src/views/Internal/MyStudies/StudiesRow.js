import React from "react";
import styled from "styled-components";

import { firestore } from "database/firebase";
import { useDocument, useCollection } from "hooks";

import { Spinner } from "components";

import { Text, Avatar, Badge, IconButton, Tooltip } from "@chakra-ui/react";
import { FaClock, FaCalendar, FaClipboard } from "react-icons/fa";
import { Link } from "react-router-dom";

function StudiesRow({ study, handleDrawer, uid }) {
  const statusColors = {
    interested: "gray",
    screened: "purple",
    consented: "cyan",
    accepted: "green",
    rejected: "red",
  };

  const [participantData, loading, error] = useDocument(firestore.collection("studies").doc(study.id).collection("participants").doc(uid));

  if (loading || !participantData) return <Spinner />; 

  if (error){
    console.log(participantData);
    return (
      <Text size="lg" mb="25px">
        Unable to load study!
      </Text>
    );
  }

  return (
    <Row>
      <Avatar
        size="1rem"
        h="30px"
        w="30px"
        bg="blue.500"
        name={study.id}
        color="white"
      />
      <Link to={`/study/${study.id}`}>
        <Text fontWeight="500">
          {study.id}
        </Text>
      </Link>
        <Text fontWeight="500" width= "50ch" overflow="hidden" whiteSpace="nowrap" textOverflow="ellipsis" wordBreak="keep-all" mr="auto">
          <Link to={`/study/${study.id}`}>
            {study.title}
          </Link>
        </Text>
      <Badge
        size="sm"
        colorScheme={statusColors[participantData["status"]]}
      >
        {participantData["status"]}
      </Badge>
      <Buttons>
        <Tooltip label="Meetings">
          <IconButton
            color="gray.400"
            size="sm"
            bg="transparent"
            icon={<FaCalendar />}
            onClick={() => handleDrawer("meetings", study.id)}
          />
        </Tooltip>
        <Tooltip label="Reminders">
          <IconButton
            color="gray.400"
            size="sm"
            bg="transparent"
            icon={<FaClock />}
            onClick={() => handleDrawer("reminders", study.id)}
          />
        </Tooltip>
        <Tooltip label="Eligibility Survey">
          <IconButton
            color="gray.400"
            size="sm"
            bg="transparent"
            icon={<FaClipboard />}
            onClick={() => handleDrawer("eligibility survey", study.id, participantData.responses)}
          />
        </Tooltip>
      </Buttons>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  padding: 10px;
  border-bottom: 1px solid #f1f2f3;
  &:last-child {
    border-bottom: none;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 5px;
`;

export default StudiesRow;