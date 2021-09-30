import { useDetectDevice } from "hooks";

import { datetime } from "utils";

import { Flex, Text } from "@chakra-ui/react";
import { FaPencilAlt, FaPhone, FaTrashAlt } from "react-icons/fa";
import { Card, Hint, Link, ActionButton } from "components";

function MeetingItem({ participant, meeting, handleDelete }) {
  const { isPhone } = useDetectDevice();

  const meetingInfo = (
    <>
      <Text>Status: {meeting.confirmedByParticipant ? "Confirmed" : "Pending"}</Text>
      <Text>Study: {meeting.studyID}</Text>
      <Text>Participant: {participant?.id}</Text>
    </>
  );

  return (
    <Card display="flex" gridGap="8px" padding="10px 12px" align="center">
      <Flex direction={isPhone && "column-reverse"} align={isPhone ? "flex-start" : "center"}>
        <Flex>
          <Text
            fontSize="0.9rem"
            color="gray.500"
            width={isPhone || "64px"}
            textAlign={isPhone ? "left" : "right"}
          >
            {datetime.get12HourTime(meeting.time)}
          </Text>
          {isPhone && <Hint fontSize="12px" label={meetingInfo} marginLeft="4px" />}
        </Flex>
        <Text fontWeight="600" marginX={isPhone || "8px"}>
          {meeting.name}
        </Text>
        {isPhone || <Hint fontSize="12px" label={meetingInfo} />}
      </Flex>
      <Flex gridGap="4px" marginLeft="auto" align="center">
        <Link to={meeting.link} isWrapper>
          <ActionButton
            icon={<FaPhone />}
            hint={meeting.confirmedByParticipant ? "Confirmed" : "Pending"}
            colorScheme={meeting.confirmedByParticipant ? "green" : "gray"}
          />
        </Link>
        <Link
          to={`/study/${meeting.studyID}/participants/meetings/${meeting.participantID}`}
          isWrapper
        >
          <ActionButton icon={<FaPencilAlt />} hint="Edit" colorScheme="blue" />
        </Link>
        <ActionButton
          icon={<FaTrashAlt />}
          hint="Delete"
          colorScheme="red"
          onClick={handleDelete}
        />
      </Flex>
    </Card>
  );
}

export default MeetingItem;
