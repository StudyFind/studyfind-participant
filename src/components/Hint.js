import React from "react";
import { Box, Icon, Tooltip } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";

export const Hint = ({ label }) => (
  <Tooltip label={label}>
    <Box>
      <Icon color="gray.400" as={FaExclamationCircle} />
    </Box>
  </Tooltip>
);
