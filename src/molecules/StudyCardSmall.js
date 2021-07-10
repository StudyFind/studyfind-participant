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
  // const user = useContext(UserContext);
  // const verified = auth.currentUser.emailVerified;

  // const handleBookmark = () => {
  //   const hasBeenSaved = user.saved.includes(study.id);
  //   const updatedSaved = hasBeenSaved
  //     ? user.saved.filter((studyID) => studyID !== study.id)
  //     : user.saved.concat(study.id);

  //   console.log(updatedSaved);

  //   firestore.collection("participants").doc(user.id).update({ saved: updatedSaved });
  // };

  // const isSaved = user.saved.includes(study.id);
  // const isEnrolled = user.enrolled.includes(study.id);

  return (
    <Flex
      direction="column"
      borderWidth="1px"
      overflow="hidden"
      rounded="md"
      bg="white"
      w="100%"
      p="20px"
      h="320px"
    >
      <Flex justify="flex-start" align="center" mb="8px">
        <Text fontSize="sm" color="gray.400">
          {study.id}
        </Text>
      </Flex>
      <Heading size="sm" noOfLines={2} mb="6px">
        {study.title}
      </Heading>
      <StudyConditions
        conditions={study.conditions}
        filterConditions={conditions}
        handleAddCondition={handleAddCondition}
      />
      <Text color="gray.500" noOfLines={5} mt="10px">
        {study.description}
      </Text>
      <Flex marginTop="auto" gridGap="8px" justify="flex-end">
        <Box>
          <Link to="/auth" isWrapper>
            <Button
              size="sm"
              bgColor="#387DFF"
              textColor="#ffffff"
              _hover={{ bgColor: "#2D65CC" }}
              _active={{ bgColor: "#1C3F80" }}
            >
              Learn More
            </Button>
          </Link>
        </Box>
      </Flex>
    </Flex>
  );
}

export default StudyCardSmall;
