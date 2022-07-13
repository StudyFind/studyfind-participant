import { Alert } from "@chakra-ui/react";

function AlertBar({ children, status, ...rest }) {
  return (
    <Alert
      status={status}
      zIndex="100"
      height="100%"
      minHeight="56px"
      {...rest}
    >
      {children}
    </Alert>
  );
}

export default AlertBar;
