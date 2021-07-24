import React from "react";
import styled from "styled-components";
import { Box } from "@chakra-ui/react";

const List = ({ children }) => (
  <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white">
    {children}
  </Box>
);

const ListRow = styled(Box)`
  border-bottom: 1px solid #f1f2f3;
  &:last-child {
    border-bottom: none;
  }
`;

List.Row = ListRow;

export { List };
