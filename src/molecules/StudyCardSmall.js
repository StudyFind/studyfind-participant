import React from "react";
import { useContext } from "react";

import { auth, firestore } from "database/firebase";
import { UserContext } from "context";

import { Box, Flex, Heading, Text, Button, Icon, Tooltip } from "@chakra-ui/react";
import { Link } from "components";
import { FaBookmark } from "react-icons/fa";

import StudyConditions from "./StudyConditions";

function StudyCardSmall({ study, conditions, handleAddCondition }) {
  const user = useContext(UserContext);
  const verified = auth.currentUser.emailVerified;

  const handleBookmark = () => {
    const hasBeenSaved = user.saved.includes(study.id);
    const updatedSaved = hasBeenSaved
      ? user.saved.filter((studyID) => studyID !== study.id)
      : user.saved.concat(study.id);

    console.log(updatedSaved);

    firestore.collection("participants").doc(user.id).update({ saved: updatedSaved });
  };

  const isSaved = user.saved.includes(study.id);
  const isEnrolled = user.enrolled.includes(study.id);
  const isExternal = !('id' in study.researcher);

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
      <Flex justify="space-between" align="center" mb="8px">
        <Text fontSize="sm" color="gray.400">
          {study.id}
        </Text>
        <Tooltip label={isSaved ? "Unsave" : "Save"}>
          <Box>
            <Icon
              size="xs"
              as={FaBookmark}
              color={isSaved ? "gold" : "gray.300"}
              onClick={handleBookmark}
            />
          </Box>
        </Tooltip>
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
      {isExternal ? (
        <Flex marginTop="auto" gridGap="8px" justify="flex-end">
          <Tooltip label="This is an external study from clinicaltrials.gov. Enrolling functionality currently unavailable.">
            <Box>
              <Link to={`https://clinicaltrials.gov/ct2/show/${study.id}`}>
                <Button size="sm" color="gray.600">
                  Learn More
                </Button>
              </Link>
            </Box>
          </Tooltip>
        </Flex>
      ) : (
        <Flex marginTop="auto" gridGap="8px" justify="flex-end">
          <Link to={`/study/${study.id}/details`} isWrapper>
            <Button size="sm" color="gray.600">
              Details
            </Button>
          </Link>
          <Tooltip label={!verified && "You must verify your email before enrolling for studies"}>
            <Box>
              <Link to={isEnrolled ? "" : `/study/${study.id}/screening`} isWrapper>
                <Button size="sm" colorScheme={isEnrolled ? "green" : "blue"} isDisabled={!verified}>
                  {isEnrolled ? "Enrolled" : "Enroll"}
                </Button>
              </Link>
            </Box>
          </Tooltip>
        </Flex>
      )}
    </Flex>
  );
}

export default StudyCardSmall;
