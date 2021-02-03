import React from "react";
import { Box } from "@chakra-ui/react";
import { Spinner } from "components";

function Page({ children, isLoading, ...rest }) {
  return (
    <Box p="40px" h="100%" bg="#f8f9fa" {...rest}>
      {isLoading ? <Spinner /> : children}
    </Box>
  );
}

export default Page;
