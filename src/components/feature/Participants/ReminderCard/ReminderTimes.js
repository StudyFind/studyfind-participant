import moment from "moment";
import { Flex, Tag, TagLabel } from "@chakra-ui/react";

function ReminderTimes({ times }) {
  return (
    <Flex gridGap="6px" marginY="12px">
      {times.map((time, i) => (
        <Tag key={i} colorScheme="blue">
          <TagLabel>{moment(time, ["HH:mm"]).format("hh:mma")}</TagLabel>
        </Tag>
      ))}
    </Flex>
  );
}

export default ReminderTimes;
