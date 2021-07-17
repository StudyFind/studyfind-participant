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
        {/* CHANGE BACK TO study.title */}
        {study.name}
      </Heading>
      <StudyConditions
        conditions={study.conditions}
        filterConditions={conditions}
        handleAddCondition={handleAddCondition}
      />
      <Text color="gray.500" noOfLines={5} mt="10px">
        {study.description}
      </Text>
      <Flex marginTop="auto" justify="space-between">
        <Text fontSize="sm" color="gray.400">
          {Math.trunc(study.distance / (user.timezone.split("/")[0] === "America" ? 1.609 : 1))}
          {user.timezone.split("/")[0] === "America" ? " mi " : " km "}
          away
        </Text>
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
      </Flex>
    </Flex>
  );
}

export default StudyCardSmall;
