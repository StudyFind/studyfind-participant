import { Flex, Tag, TagLabel } from "@chakra-ui/react";

function StudyConditions({ conditions, filterConditions, handleAddCondition }) {
  return (
    <Flex mt="6px" gridGap="4px" flexWrap="wrap" h="24px" overflow="hidden">
      {conditions?.map((condition, i) => (
        <Tag
          key={i}
          size="sm"
          variant="solid"
          cursor="pointer"
          colorScheme={filterConditions?.includes(condition) ? "green" : "blue"}
          onClick={() => handleAddCondition(condition)}
        >
          <TagLabel>{condition}</TagLabel>
        </Tag>
      ))}
    </Flex>
  );
}

export default StudyConditions;
