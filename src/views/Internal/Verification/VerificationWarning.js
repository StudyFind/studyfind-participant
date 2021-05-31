import React from "react";

import { Flex, Text, Alert, AlertIcon, Button } from "@chakra-ui/react";

function VerificationWarning({ email, handleClick, loading }) {
  return (
    <Alert status="warning" position="fixed" top="0" zIndex="100">
      <Flex w="calc(100% - 280px)" justify="space-between" align="center" wrap="wrap">
        <Flex>
          <AlertIcon />
          <Text>
            Please verify your email <b>{email}</b> to begin creating research studies
          </Text>
        </Flex>
        <Button
          size="sm"
          color="white"
          bg="#DD6B20"
          _hover={{ bg: "#CD5B10" }}
          onClick={handleClick}
          isLoading={loading}
          loadingText="Sending..."
        >
          Send Verification Email
        </Button>
      </Flex>
    </Alert>
  );
}

export default VerificationWarning;
