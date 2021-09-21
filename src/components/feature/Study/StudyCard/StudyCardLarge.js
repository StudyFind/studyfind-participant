import { useColor, useDetectDevice } from "hooks";
import { Heading, Text, Box, Flex } from "@chakra-ui/react";

import StudyBullets from "./StudyBullets";
import StudyConditions from "./StudyConditions";
import StudyResearcher from "./StudyResearcher";

function StudyCardLarge({ study }) {
  const background = useColor("white", "gray.900");
  const borderColor = useColor("gray.200", "gray.700");

  const { isPhone } = useDetectDevice();

  return (
    <Box
      rounded="md"
      overflow="hidden"
      padding="20px"
      borderWidth="1px"
      borderColor={borderColor}
      background={background}
      width={isPhone && "100%"}
    >
      <Heading size="md" marginTop="5px">
        {study.title}
      </Heading>
      <StudyConditions conditions={study.conditions} />
      <Text color="gray.500" marginY="15px">
        {study.description}
      </Text>
      <Flex
        direction={isPhone ? "column" : "row"}
        justify={isPhone || "space-between"}
        align={isPhone || "flex-end"}
        gridGap={isPhone && "20px"}
      >
        <StudyBullets
          sex={study.sex}
          minAge={study.minAge}
          maxAge={study.maxAge}
          acceptsHealthyVolunteers={study.acceptsHealthyVolunteers}
        />
        <StudyResearcher researcher={study.researcher} />
      </Flex>
    </Box>
  );
}

export default StudyCardLarge;
