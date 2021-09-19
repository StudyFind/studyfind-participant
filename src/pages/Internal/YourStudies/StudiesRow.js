import styled from "styled-components";
import { useDocument } from "hooks";
import { useParams, useHistory } from "react-router-dom";

import { firestore } from "database/firebase";

import { Text, Avatar, Badge, Box } from "@chakra-ui/react";
import { FaClock, FaCalendar, FaClipboard, FaComment } from "react-icons/fa";

import { Link, ActionButton } from "@studyfind/components";

import StudyDrawer from "./StudiesDrawer";
import Messages from "./Messages/Messages";
import Meetings from "./Meetings/Meetings";
import Reminders from "./Reminders/Reminders";
import Eligibility from "./Questions/Questions";

function StudiesRow({ study, uid }) {
  const history = useHistory();
  const { studyID, action } = useParams();

  const isOpen = action && study.id === studyID;

  const handleClose = () => {
    history.push(`/your-studies`);
  };

  const handleOpen = (action) => {
    history.push(`/your-studies/${study.id}/${action}`);
  };

  const statusColors = {
    interested: "gray",
    screened: "purple",
    consented: "cyan",
    accepted: "green",
    rejected: "red",
  };

  const [participantData, loading, error] = useDocument(
    firestore
      .collection("studies")
      .doc(study.id)
      .collection("participants")
      .doc(uid)
  );

  if (error) {
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
      <Text fontWeight="500">
        <Link to={`/study/${study.id}/details`}>{study.id}</Link>
      </Text>
      <Text
        fontWeight="500"
        width="50ch"
        overflow="hidden"
        whiteSpace="nowrap"
        textOverflow="ellipsis"
        wordBreak="keep-all"
        mr="auto"
      >
        <Link to={`/study/${study.id}/details`}>{study.title}</Link>
      </Text>
      <Badge size="sm" colorScheme={statusColors[participantData.status]}>
        {participantData.status}
      </Badge>
      <Buttons>
        <ActionButton
          hint="Messages"
          icon={<FaComment />}
          onClick={() => handleOpen("messages")}
        />
        <ActionButton
          hint="Meetings"
          icon={<FaCalendar />}
          onClick={() => handleOpen("meetings")}
        />
        <ActionButton
          hint="Reminders"
          icon={<FaClock />}
          onClick={() => handleOpen("reminders")}
        />
        <ActionButton
          hint="Reminders"
          icon={<FaClipboard />}
          onClick={() => handleOpen("eligibility")}
        />
      </Buttons>
      <StudyDrawer
        action={action}
        studyID={study.id}
        onClose={handleClose}
        isOpen={isOpen}
      >
        {action === "messages" && (
          <Messages study={study} participant={{ id: uid }} />
        )}
        {action === "meetings" && (
          <Box p="25px">
            <Meetings study={study} />
          </Box>
        )}
        {action === "reminders" && (
          <Box p="25px">
            <Reminders study={study} />
          </Box>
        )}
        {action === "eligibility" && (
          <Box p="25px">
            <Eligibility study={study} responses={participantData.responses} />
          </Box>
        )}
      </StudyDrawer>
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
