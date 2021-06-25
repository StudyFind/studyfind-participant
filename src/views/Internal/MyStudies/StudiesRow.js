import styled from "styled-components";

import { firestore } from "database/firebase";
import { useDocument } from "hooks";
import { useParams, useHistory } from "react-router-dom";

import { Text, Avatar, Badge, Box } from "@chakra-ui/react";
import { FaClock, FaCalendar, FaClipboard, FaComment, FaQuestion } from "react-icons/fa";

import { Link, ActionButton } from "components";
import StudyDrawer from "./StudyDrawer";
import Messages from "./Messages/Messages";
import Meetings from "./Meetings/Meetings";
import Reminders from "./Reminders/Reminders";
import Eligibility from "./Eligibility/Eligibility";
import Surveys from "./Surveys/Surveys";

function StudiesRow({ study, user }) {
  const history = useHistory();
  const { studyID, action } = useParams();

  const isOpen = action && study.id === studyID;

  const handleClose = () => {
    history.push(`/MyStudies`);
  };

  const handleOpen = (action) => {
    history.push(`/MyStudies/${study.id}/${action}`);
  };

  const statusColors = {
    interested: "gray",
    screened: "purple",
    consented: "cyan",
    accepted: "green",
    rejected: "red",
  };

  const [participantData, loading, error] = useDocument(
    firestore.collection("studies").doc(study.id).collection("participants").doc(user.id)
  );

  if (loading || !participantData) return <></>;

  if (error) {
    return (
      <Text size="lg" mb="25px">
        Unable to load study!
      </Text>
    );
  }

  return (
    <Row>
      <Avatar size="1rem" h="30px" w="30px" bg="blue.500" name={study.id} color="white" />
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
        <Link to={`/study/${study.id}`}>{study.title}</Link>
      </Text>
      <Badge size="sm" colorScheme={statusColors[participantData.status]}>
        {participantData.status}
      </Badge>
      <Buttons>
        <ActionButton hint="Messages" icon={<FaComment />} onClick={() => handleOpen("messages")} />
        <ActionButton
          hint="Meetings"
          icon={<FaCalendar />}
          onClick={() => handleOpen("meetings")}
        />
        <ActionButton hint="Reminders" icon={<FaClock />} onClick={() => handleOpen("reminders")} />
        <ActionButton
          hint="Eligibility"
          icon={<FaClipboard />}
          onClick={() => handleOpen("eligibility")}
        />
        <ActionButton hint="Surveys" icon={<FaQuestion />} onClick={() => handleOpen("surveys")} />
      </Buttons>
      <StudyDrawer action={action} studyID={study.id} onClose={handleClose} isOpen={isOpen}>
        {action === "messages" && <Messages study={study} participant={user} />}
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
        {action === "surveys" && <Surveys study={study} />}
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
