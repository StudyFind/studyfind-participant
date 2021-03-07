import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";
import { Box, Flex, HStack, Icon, Heading, Text, Stack, Tag, TagLabel, Button } from "@chakra-ui/react";
import { FaBookmark } from "react-icons/fa";

function StudyCardSmall({ study, user }) {
  return (
    <Link to={`/study/${study.id}`}>
      <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white" p="20px" w="100%" h="270px">
        <Flex justify="space-between" align="center" gridGap="8px" mb="8px">
          <Text color="gray.400" fontSize="sm">
            {study.id}
          </Text>
          <HStack>
            <Icon color="gray.300" as={FaBookmark} size="sm" />
          </HStack>
        </Flex>
        <Title size="sm" mt="5px">
          {study.title}
        </Title>
        <Conditions spacing={0} isInline mt="6px">
          {study.conditions &&
            study.conditions.map((condition, index) => (
              <Tag key={index} variant="solid" size="sm" colorScheme="blue">
                <TagLabel>{condition}</TagLabel>
              </Tag>
            ))}
        </Conditions>
        <Description color="gray.500" my="10px">
          {study.description}
        </Description>
        <Flex justifyContent="flex-end" gridGap="8px" mb="8px">
          <HStack>
            <Link to={`/study/${study.id}`}>
              <Button h={7} colorScheme='gray'>Details</Button>
            </Link>
            { user.enrolled && user.enrolled.includes(study.id)?
              (
                <Button h={7} colorScheme='green' disabled>Enrolled</Button>
              ) : (
                  <Link to={`/study/${study.id}/questionnaire`}>
                  <Button h={7} colorScheme='blue'>Enroll</Button>
                  </Link>
              )
            }
          </HStack>
        </Flex>
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
  height: 100px;
  -webkit-line-clamp: 5; /* number of lines to show */
  -webkit-box-orient: vertical;
`;

export default StudyCardSmall;
