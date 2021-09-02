import { useColorMode } from "hooks";
import { Flex, Tag, TagLabel } from "@chakra-ui/react";

function StudyConditions({ conditions }) {
  const { colorMode } = useColorMode();

  return (
    <Flex height="24px" gridGap="4px" marginTop="8px" flexWrap="wrap" overflow="hidden">
      {conditions?.map((condition, i) => (
        <Tag
          key={i}
          size="sm"
          colorScheme="blue"
          variant={colorMode === "light" ? "solid" : "subtle"}
        >
          <TagLabel>{condition}</TagLabel>
        </Tag>
      ))}
    </Flex>
  );
}

export default StudyConditions;
