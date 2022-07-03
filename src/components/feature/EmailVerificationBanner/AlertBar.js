import { Alert, AlertIcon } from "@chakra-ui/react";

function AlertBar({ icon, children, status, ...rest }) {
  return (
    <Alert
      status={status}
      zIndex="100"
      height="100%"
      minHeight="56px"
      {...rest}
    >
      <AlertIcon as={icon} />
      {children}
    </Alert>
  );
}

export default AlertBar;
