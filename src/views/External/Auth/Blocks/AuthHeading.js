import React from "react";
import { Heading } from "@chakra-ui/react";

function AuthHeading({ children, ...rest }) {
  return (
    <Heading fontSize="1.75rem" color="blue.500" textAlign="center" {...rest}>
      {children}
    </Heading>
  );
}

export default AuthHeading;
