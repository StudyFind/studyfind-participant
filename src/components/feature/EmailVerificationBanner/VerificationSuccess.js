import { Text } from "@chakra-ui/react";
import AlertBar from "./AlertBar";

function VerificationSuccess({ email }) {
  return (
    <AlertBar status="success">
      <Text>
        {/* The "Text" component here is required to retain a space before the email */}
        Your verification email has been sent to <b>{email}</b>
      </Text>
    </AlertBar>
  );
}

export default VerificationSuccess;
