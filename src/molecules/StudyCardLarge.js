import React from "react";

import { Heading, Text, Box, Flex } from "@chakra-ui/react";

import StudyBullets from "./StudyBullets";
import StudyConditions from "./StudyConditions";
import StudyResearcher from "./StudyResearcher";

function StudyCardLarge({ study }) {
  return (
    <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white" p="20px">
      <Text fontSize="sm" color="gray.400">
        {study.id}
      </Text>
      <Heading size="md" mt="5px">
        {study.title}
      </Heading>
      <StudyConditions conditions={study.conditions} />
      <Text color="gray.500" my="15px">
        {study.description}
      </Text>
      <Flex justify="space-between" align="flex-end">
        <StudyBullets age={study.age} sex={study.sex} control={study.control} />
        <StudyResearcher researcher={study.researcher} />
      </Flex>
    </Box>
  );
}

export default StudyCardLarge;
