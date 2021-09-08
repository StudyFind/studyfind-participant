import { datetime } from "utils";
import { Text } from "@chakra-ui/react";

function Time({ time }) {
  const displayDate = datetime.getFriendlyDate(time);
  const displayTime = datetime.get12HourTime(time);

  return (
    <Text color="gray.500" fontSize="0.9rem">
      {displayDate} at {displayTime}
    </Text>
  );
}

export default Time;
