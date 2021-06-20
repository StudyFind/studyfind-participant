import { datetime } from "functions";

import { Tooltip, Text } from "@chakra-ui/react";

function NotificationTime({ time }) {
  const displayTime = datetime.get12HourTime(time);
  const displayDate = datetime.getFriendlyDate(time);
  const relativeTime = datetime.getRelativeTime(time);

  return (
    <Tooltip label={`${displayDate} at ${displayTime}`}>
      <Text cursor="pointer" fontSize="12px" color="gray.400">
        {relativeTime}
      </Text>
    </Tooltip>
  );
}

export default NotificationTime;
