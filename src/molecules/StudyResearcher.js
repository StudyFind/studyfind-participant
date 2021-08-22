import React from "react";
import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

function StudyResearcher({ researcher }) {
  return (
    <Flex
      gridGap="10px"
      align="flex-end"
      borderWidth="1px"
      rounded="md"
      overflow="hidden"
      bg="white"
      p="12px"
    >
      <Avatar color="white" bg="blue.500" name={researcher.name} />
      <Box>
        <Text>{researcher.name}</Text>
        <Text color="gray.500">{researcher.email}</Text>
      </Box>
    </Flex>
  );
}

export default StudyResearcher;
