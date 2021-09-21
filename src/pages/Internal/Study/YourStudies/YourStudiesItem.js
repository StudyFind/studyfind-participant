import { Text, Badge, Flex } from "@chakra-ui/react";
import { ActionButton } from "components";
import { FaClock, FaCalendar, FaClipboard, FaComment } from "react-icons/fa";

function YourStudiesItem({ study, handleOpen }) {
  const statusColors = {
    interested: "gray",
    screened: "purple",
    consented: "cyan",
    accepted: "green",
    rejected: "red",
  };

  return (
    <Flex align="center" gridGap="10px" padding="10px">
      <Text fontWeight="500" mr="auto">
        {study.id}
      </Text>
      <Badge size="sm" colorScheme={statusColors[study.participant.status]}>
        {study.participant.status}
      </Badge>
      <Flex align="center" gridGap="5px">
        <ActionButton
          hint="Messages"
          icon={<FaComment />}
          onClick={() => handleOpen(study.id, "messages")}
        />
        <ActionButton
          hint="Questions"
          icon={<FaClipboard />}
          onClick={() => handleOpen(study.id, "questions")}
        />
        <ActionButton
          hint="Meetings"
          icon={<FaCalendar />}
          onClick={() => handleOpen(study.id, "meetings")}
        />
        <ActionButton
          hint="Reminders"
          icon={<FaClock />}
          onClick={() => handleOpen(study.id, "reminders")}
        />
      </Flex>
    </Flex>
  );
}

export default YourStudiesItem;
