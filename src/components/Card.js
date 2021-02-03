import React from "react";
import { Box } from "@chakra-ui/react";

function Card({ children, ...rest }) {
  return (
    <Box rounded="md" borderWidth="1px" {...rest}>
      {children}
    </Box>
  );
}

export default Card;
