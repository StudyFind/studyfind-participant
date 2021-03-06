import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Box, Flex, Icon, Heading, Text, Stack, Tag, TagLabel } from "@chakra-ui/react";
import { FaBookmark } from "react-icons/fa";

function StudyCardSmall({ study, conditions, handleConditions }) {
  return (
    <Link to={`/study/${study.id}`}>
      <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white" p="20px" w="100%" h="270px">
        <Flex justify="space-between" align="center" gridGap="8px" mb="8px">
          <Text color="gray.400" fontSize="sm">
            {study.id}
          </Text>
          <Icon color="gray.300" as={FaBookmark} size="sm" />
        </Flex>
        <Title size="sm" mt="5px">
          {study.title}
        </Title>
        <Conditions spacing={0} isInline mt="6px">
          {study.conditions &&
            study.conditions.map((condition, index) => (
              <Box key={index} onClick={(event) => {
                  event.preventDefault();
                  handleConditions(conditions.includes(condition) ? "remove" : "add", condition)
                }
              }>
                <Tag variant="solid" size="sm" colorScheme={conditions.includes(condition) ? "gray" : "blue"}>
                  <TagLabel>{condition}</TagLabel>
                </Tag>
              </Box>
            ))}
        </Conditions>
        <Description color="gray.500" my="10px">
          {study.description}
        </Description>
      </Box>
    </Link>
  );
}

const Conditions = styled(Stack)`
  display: grid;
  grid-gap: 4px;
  flex-wrap: wrap;
  height: 24px;
  overflow: hidden;
`;

const Title = styled(Heading)`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 100%; /* fallback */
  -webkit-line-clamp: 2; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

const Description = styled(Text)`
  word-break: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  max-height: 100%; /* fallback */
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export default StudyCardSmall;
