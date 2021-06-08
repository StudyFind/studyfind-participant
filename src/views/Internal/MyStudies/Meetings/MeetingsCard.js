import { Box, Flex, Heading, Text, Button } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

import { datetime } from "functions";
import { Link } from "components";

function MeetingsCard({ meeting, handleConfirm }) {
  const displayDate = datetime.getFriendlyDate(meeting.time);
  const displayTime = datetime.get12HourTime(meeting.time);

  return (
    <Box borderWidth="1px" bg="white" rounded="md" p="15px">
      <Heading size="md">{meeting.name}</Heading>
      <Text color="gray.500" fontSize="0.9rem" mb="8px">
        {displayDate} at {displayTime}
      </Text>
      <Link to={meeting.link}>
        <Flex align="center" gridGap="4px">
          Link to Meeting
          <Text fontSize="0.8rem">
            <FaExternalLinkAlt />
          </Text>
        </Flex>
      </Link>
      <Flex justify="space-between" align="center" mt="16px">
        <Flex gridGap="4px">
          {meeting.confirmedByParticipant ? (
            <Button colorScheme="green">Confirmed</Button>
          ) : (
            <Button colorScheme="blue" onClick={() => handleConfirm(meeting)}>
              Confirm
            </Button>
          )}
        </Flex>
        <Text color="gray.500" fontSize="0.9rem" fontStyle="italic"></Text>
      </Flex>
    </Box>
  );
}

export default MeetingsCard;
