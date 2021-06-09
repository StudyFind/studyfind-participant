import { Box } from "@chakra-ui/react";
import { Message } from "components";

function NotificationsEmpty() {
  return (
    <Box h="500px" borderWidth="1px" rounded="md" bg="white">
      <Message title="Nothing to show" description="You do not have any notifications right now" />
    </Box>
  );
}

export default NotificationsEmpty;
