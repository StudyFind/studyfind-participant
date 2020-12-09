import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Box, Heading, Text, Stack, Tag, TagLabel } from "@chakra-ui/react";

function StudyCardSmall({ study }) {
  return (
    <Card to={`/study/${study.id}`}>
      <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white" p="20px" w="100%" h="270px">
        <Text fontSize="sm" color="gray.400">
          {study.id}
        </Text>
        <Title size="sm" mt="5px">
          {study.title}
        </Title>
        <Conditions spacing={0} isInline mt="6px">
          {study.conditions &&
            study.conditions.map((condition, index) => (
              <Condition key={index} variant="solid" size="sm" colorScheme="blue">
                <TagLabel>{condition}</TagLabel>
              </Condition>
            ))}
        </Conditions>
        <Description color="gray.500" my="10px">
          {study.description}
        </Description>
      </Box>
    </Card>
  );
}

const Card = styled(Link)`
  cursor: pointer;
`;

const Conditions = styled(Stack)`
  display: grid;
  grid-gap: 4px;
  flex-wrap: wrap;
  height: 24px;
  overflow: hidden;
`;

const Condition = styled(Tag)``;

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
