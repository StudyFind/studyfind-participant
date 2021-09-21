import { Flex, Text, Button } from "@chakra-ui/react";
import AlertBar from "./AlertBar";

function VerificationPending({ email, loading, handleSendVerificationEmail }) {
  return (
    <AlertBar status="warning">
      <Flex justify="space-between" align="center" wrap="wrap" width="100%">
        <Text>
          Please verify your email <b>{email}</b> to begin creating research
          studies
        </Text>
        <Button
          size="sm"
          color="white"
          background="#DD6B20"
          _hover={{ bg: "#CD5B10" }}
          onClick={handleSendVerificationEmail}
          isLoading={loading}
          loadingText="Sending..."
        >
          Send Verification Email
        </Button>
      </Flex>
    </AlertBar>
  );
}

export default VerificationPending;
