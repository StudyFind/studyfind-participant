import { useColor } from "hooks";
import { datetime } from "utils";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import MeetingStatus from "./MeetingStatus";
import MeetingButtons from "./MeetingButtons";

function MeetingCard({ meeting, handleEdit, handleDelete }) {
  const displayDate = datetime.getFriendlyDate(meeting.time);
  const displayTime = datetime.get12HourTime(meeting.time);

  const border = useColor("gray.200", "gray.700");
  const background = useColor("white", "gray.900");

  return (
    <Box
      borderWidth="1px"
      borderColor={border}
      background={background}
      rounded="md"
      padding="15px"
      width="100%"
    >
      <Heading size="md">{meeting.name}</Heading>
      <Text color="gray.500" fontSize="0.9rem" marginBottom="8px">
        {displayDate} at {displayTime}
      </Text>
      <Flex justify="space-between" align="center" marginTop="16px">
        <MeetingButtons
          link={meeting.link}
          confirmed={meeting.confirmedByParticipant}
          handleEdit={() => handleEdit(meeting)}
          handleDelete={() => handleDelete(meeting.id)}
        />
        <MeetingStatus confirmed={meeting.confirmedByParticipant} />
      </Flex>
    </Box>
  );
}

export default MeetingCard;
