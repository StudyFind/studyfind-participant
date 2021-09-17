import { Box } from "@chakra-ui/react";
import { Message } from "components";

function FindStudiesError() {
  return (
    <Box width="100%" height="calc(100vh - 80px)" rounded="md">
      <Message
        status="failure"
        title="Connection Error"
        description="We were unable to load your studies. Please check your connection and try again."
      />
    </Box>
  );
}

export default FindStudiesError;
