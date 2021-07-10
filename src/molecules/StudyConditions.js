import React from "react";
import { Flex, Tag, TagLabel } from "@chakra-ui/react";

function StudyConditions({ conditions, filterConditions, handleAddCondition }) {
  return (
    <Flex mt="6px" gridGap="4px" flexWrap="wrap" h="24px" overflow="hidden">
      {conditions?.map((condition, i) => (
        <Tag
          key={i}
          size="sm"
          variant="solid"
          // cursor="pointer"
          bgColor="#387DFF"
          textColor="#ffffff"
          // _hover={{ bgColor: "#2D65CC" }}
          // _active={{ bgColor: "#1C3F80" }}
        >
          <TagLabel>{condition}</TagLabel>
        </Tag>
      ))}
    </Flex>
  );
}

export default StudyConditions;
