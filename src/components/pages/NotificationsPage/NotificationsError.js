import { Box } from "@chakra-ui/react";
import { Message } from "components";

function NotificationsError() {
  return (
    <Box height="400px" rounded="md">
      <Message
        status="failure"
        title="Connection Error"
        description="We were unable to load your meetings. Please check your connection and try again."
      />
    </Box>
  );
}

export default NotificationsError;
