import { useColor } from "hooks";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import StudyStatus from "./StudyStatus";
import StudyConditions from "./StudyConditions";

function StudyCardSmall({ study }) {
  const background = useColor("white", "gray.900");
  const borderColor = useColor("gray.200", "gray.700");

  return (
    <Box
      background={background}
      borderColor={borderColor}
      borderWidth="1px"
      overflow="hidden"
      rounded="md"
      padding="20px"
      width="100%"
    >
      <Flex justify="space-between" align="center" marginBottom="8px">
        <StudyStatus activated={study.activated} />
      </Flex>
      <Heading size="sm" noOfLines={2} marginBottom="6px">
        {study.title}
      </Heading>
      <StudyConditions conditions={study.conditions} />
      <Text color="gray.500" noOfLines={5} marginTop="10px">
        {study.description}
      </Text>
    </Box>
  );
}

export default StudyCardSmall;
