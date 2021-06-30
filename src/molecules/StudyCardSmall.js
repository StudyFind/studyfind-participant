import React, { useContext } from "react";

import { auth, firestore } from "database/firebase";
import { UserContext } from "context";
import { NavHashLink as HashLink } from "react-router-hash-link";

import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Icon,
  Tooltip,
} from "@chakra-ui/react";
import { Link } from "./Link";
import { FaBookmark } from "react-icons/fa";

import StudyConditions from "./StudyConditions";

function StudyCardSmall({ study, conditions, handleAddCondition }) {
  const user = useContext(UserContext);

  const handleBookmark = () => {
    const hasBeenSaved = user.saved.includes(study.id);
    const updatedSaved = hasBeenSaved
      ? user.saved.filter((studyID) => studyID !== study.id)
      : user.saved.concat(study.id);

    console.log(updatedSaved);

    firestore
      .collection("participants")
      .doc(user.id)
      .update({ saved: updatedSaved });
  };

  return (
    <Flex
      direction="column"
      borderWidth="1px"
      overflow="hidden"
      rounded="md"
      bg="white"
      w="100%"
      p="20px"
      h="55vh"
    >
      <Flex justify="space-between" align="center" mb="8px">
        <Text fontSize="sm" color="gray.400">
          Study ID
        </Text>
        <Tooltip label="Label">
          <Box>
            <Icon size="xs" as={FaBookmark} color="gray.300" />
          </Box>
        </Tooltip>
      </Flex>
      <Heading size="sm" noOfLines={2} mb="6px">
        Study Title
      </Heading>
      <StudyConditions />
      <Text color="gray.500" noOfLines={5} mt="10px">
        Study Description
      </Text>
      <Flex marginTop="auto" gridGap="8px" justify="flex-end">
        <HashLink to="/auth">
          <Button size="sm" color="gray.600">
            Details
          </Button>
        </HashLink>
        <Tooltip label="Label">
          <Box>
            <HashLink to="/auth">
              <Button size="sm" colorScheme="blue">
                Enroll
              </Button>
            </HashLink>
          </Box>
        </Tooltip>
      </Flex>
    </Flex>
  );
}

export default StudyCardSmall;
