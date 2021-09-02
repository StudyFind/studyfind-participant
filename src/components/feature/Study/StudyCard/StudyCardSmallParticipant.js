import { useColor } from "hooks";
import { Box, Flex, Heading, Button, Text, Tooltip, Icon } from "@chakra-ui/react";
import { Link } from "components";
import { FaBookmark, FaCheckCircle } from "react-icons/fa";

import StudyConditions from "./StudyConditions";

function StudyCardSmall({
  study,
  handleBookmark,
  detailsRedirectLink,
  enrollRedirectLink,
  hasParticipantEnrolled,
  hasParticipantSaved,
  isParticipantVerified,
}) {
  const detailsButtonColor = useColor("gray.500", "gray.400");
  const enrolledButtonColor = useColor("green.500", "green.400");
  const enrolledButtonBackground = useColor("green.100", "green.900");
  const bookmarkBackground = useColor("gray.300", "gray.600");
  const borderColor = useColor("gray.200", "gray.700");

  const background = useColor("white", "gray.900");

  return (
    <Box
      background={background}
      borderColor={borderColor}
      borderWidth="1px"
      overflow="hidden"
      rounded="md"
      padding="20px"
      width="100%"
    >
      <Flex justify="space-between" align="center" marginBottom="8px">
        <Text fontSize="sm" color="gray.400">
          {study.id}
        </Text>
        <Tooltip label={hasParticipantSaved ? "Unsave" : "Save"}>
          <Box>
            <Icon
              fontSize="sm"
              as={FaBookmark}
              color={hasParticipantSaved ? "gold" : bookmarkBackground}
              onClick={handleBookmark}
            />
          </Box>
        </Tooltip>
      </Flex>
      <Heading size="sm" noOfLines={2} marginBottom="6px">
        {study.title}
      </Heading>
      <StudyConditions conditions={study.conditions} />
      <Text color="gray.500" noOfLines={5} marginTop="10px">
        {study.description}
      </Text>
      <Flex marginTop="15px" gridGap="8px" justify="flex-end" align="fill">
        <Link to={detailsRedirectLink} isWrapper>
          <Button size="sm" color={detailsButtonColor}>
            Details
          </Button>
        </Link>
        <Tooltip
          label={
            !isParticipantVerified && "You must verify your email before enrolling for studies"
          }
        >
          <Box>
            {hasParticipantEnrolled ? (
              <Flex
                align="center"
                gridGap="6px"
                paddingX="12px"
                color={enrolledButtonColor}
                background={enrolledButtonBackground}
                rounded="md"
                fontSize="14px"
                fontWeight="600"
                height="32px"
              >
                <FaCheckCircle />
                <Text marginBottom="2px">Enrolled</Text>
              </Flex>
            ) : (
              <Link to={enrollRedirectLink} isWrapper>
                <Button size="sm" colorScheme="blue" isDisabled={!isParticipantVerified}>
                  Enroll
                </Button>
              </Link>
            )}
          </Box>
        </Tooltip>
      </Flex>
    </Box>
  );
}

export default StudyCardSmall;
