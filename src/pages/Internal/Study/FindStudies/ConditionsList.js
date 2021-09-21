import { Box, Flex, Heading, Tag, TagLabel, TagCloseButton } from "@chakra-ui/react";

function ConditionsList({ conditions, handleDeleteCondition, handleClearConditions }) {
  return (
    !!conditions.length && (
      <Box my="25px">
        <Heading size="md" mb="10px">
          Conditions
        </Heading>
        <Flex gridGap="10px" wrap="wrap">
          {conditions.map((condition, index) => (
            <Tag key={index} variant="solid" size="md" colorScheme="green">
              <TagLabel>{String(condition)}</TagLabel>
              <TagCloseButton onClick={() => handleDeleteCondition(index)} />
            </Tag>
          ))}
          {conditions.length > 3 && (
            <Box onClick={() => handleClearConditions()}>
              <Tag m="3px" size="md">
                <TagLabel>Clear all</TagLabel>
              </Tag>
            </Box>
          )}
        </Flex>
      </Box>
    )
  );
}

export default ConditionsList;
