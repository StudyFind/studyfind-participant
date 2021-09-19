import { Box, Heading } from "@chakra-ui/react";

import Time from "../Time";

function MeetingDetails({ name, time }) {
  return (
    <Box marginBottom="8px">
      <Heading size="md">{name}</Heading>
      <Time time={time} />
    </Box>
  );
}

export default MeetingDetails;
