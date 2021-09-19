import { auth } from "database/firebase";
import { Box, Flex, Heading, Button, Tooltip } from "@chakra-ui/react";
import { Link } from "@studyfind/components";

import StudyCardLarge from "molecules/StudyCardLarge";

function Details({ study, user }) {
  const verified = auth.currentUser.emailVerified;

  return (
    <>
      <Flex justify="space-between" align="center" my="15px" h="40px">
        <Heading fontSize="28px">Details</Heading>
        {user.enrolled.includes(study.id) ? (
          <Button colorScheme="green" disabled>
            Enrolled
          </Button>
        ) : (
          <Tooltip
            label={
              !verified &&
              "You must verify your email before enrolling for studies"
            }
          >
            <Box>
              <Link to={`/study/${study.id}/screening`}>
                <Button colorScheme="blue" isDisabled={!verified}>
                  Enroll
                </Button>
              </Link>
            </Box>
          </Tooltip>
        )}
      </Flex>
      <StudyCardLarge study={study} />
    </>
  );
}

export default Details;
