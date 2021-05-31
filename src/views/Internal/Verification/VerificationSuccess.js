import React from "react";

import { Text, Alert, AlertIcon } from "@chakra-ui/react";

function VerificationSuccess({ email }) {
  return (
    <Alert status="success" position="fixed" top="0" zIndex="100">
      <AlertIcon />
      <Text>
        Your verification email has been sent to <b>{email}</b>
      </Text>
    </Alert>
  );
}

export default VerificationSuccess;
