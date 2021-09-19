import { Text, Alert, AlertIcon } from "@chakra-ui/react";

function VerificationFailure() {
  return (
    <Alert status="error" position="fixed" top="0" zIndex="100">
      <AlertIcon />
      <Text>
        An error ocurred while sending your verification email. Please try again
        later.
      </Text>
    </Alert>
  );
}

export default VerificationFailure;
