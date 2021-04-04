import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Heading, Button, Flex } from "@chakra-ui/react";
import StudyCardLarge from "views/Internal/StudyCardLarge";

function DetailsView({ study, user }) {
  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg" my="8px">
          Details
        </Heading>

        { user.enrolled.includes(study.id)?
          (
            <Button colorScheme="green" disabled>
              Enrolled
            </Button>
          ) : (
          <Link to={`/study/${study.id}/questionnaire`}>
            <Button colorScheme="blue">
              Enroll
            </Button>
          </Link>
          )
        }

      </Flex>
      <StudyCardLarge study={study} />
      <br/>
      <Link to={`/search`}>
      <Button colorScheme="blue" float="right">
      Back
      </Button>
      </Link>

    </>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

export default DetailsView;
