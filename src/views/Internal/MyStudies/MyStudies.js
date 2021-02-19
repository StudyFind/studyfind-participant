import React from "react";
import styled from "styled-components";

import { Heading, Box, Flex } from "@chakra-ui/react";

function MyStudies() {
  return (
    <div>
    <Heading size="lg" mb="25px">
      My Studies
    </Heading>

    <Box borderWidth="1px" rounded="md" bg="white">



<Row>

    <th>Study ID</th>
    <th>Study Name</th>
    <th>Status</th>
    <th>Scheduled Meetings</th>
    <th>Reminders</th>
    <th>Screening Survey</th>

</Row>



    </Box>

    </div>
  )
}


const Row = styled.div`
  display: flex;
  justify-content: space-between;
  grid-gap: 10px;
  padding: 15px;

  border-bottom: 1px solid #f1f2f3;

  &:last-child {
    border-bottom: none;
  }
`;


export default MyStudies;
