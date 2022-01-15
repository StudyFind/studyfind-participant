import { Text, Badge } from "@chakra-ui/react";
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
    <div
      style={{
        display: "grid",
        alignItems: "center",
        padding: "10px",
        columnGap: "10px",
      }}
    >
      <Text isTruncated fontWeight="500">
        {study.title}
      </Text>
      <div
        style={{
          display: "subgrid",
          gridColumn: 2,
          justifySelf: "end",
          alignItems: "center",
          columnGap: "5px",
        }}
      >
        <Badge
          size="sm"
          mr="5px"
          colorScheme={statusColors[study.participant.status]}
        >
          {study.participant.status}
        </Badge>
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
        <ActionButton
          hint="Messages"
          icon={<FaComment />}
          onClick={() => handleOpen(study.id, "messages")}
        />
      </div>
    </div>
  );
}

export default YourStudiesItem;
