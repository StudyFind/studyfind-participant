import { Alert, AlertIcon } from "@chakra-ui/react";

function AlertBar({ icon, children, status }) {
  return (
    <Alert status={status} zIndex="100" height="100%" minHeight="56px">
      <AlertIcon as={icon} />
      {children}
    </Alert>
  );
}

export default AlertBar;
