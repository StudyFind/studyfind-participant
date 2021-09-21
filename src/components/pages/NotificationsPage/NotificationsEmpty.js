import { Box } from "@chakra-ui/react";
import { Message } from "components";

function NotificationsEmpty() {
  return (
    <Box height="400px" rounded="md">
      <Message
        title="Nothing to see here"
        description="You do not have any notifications right now"
        showBackground
      />
    </Box>
  );
}

export default NotificationsEmpty;
