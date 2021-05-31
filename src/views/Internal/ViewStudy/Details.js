import React from "react";

import { Heading, Button, Flex } from "@chakra-ui/react";
import { Link } from "components";
import StudyCardLarge from "molecules/StudyCardLarge";

function Details({ study, user }) {
  return (
    <>
      <Flex justify="space-between" align="center" my="15px" h="40px">
        <Heading fontSize="28px">Details</Heading>
        {user.enrolled.includes(study.id) ? (
          <Button colorScheme="green" disabled>
            Enrolled
          </Button>
        ) : (
          <Link to={`/study/${study.id}/screening`}>
            <Button colorScheme="blue">Enroll</Button>
          </Link>
        )}
      </Flex>
      <StudyCardLarge study={study} />
    </>
  );
}

export default Details;
