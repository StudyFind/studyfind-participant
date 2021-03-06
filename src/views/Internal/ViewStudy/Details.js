import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import { Heading, Button, Flex } from "@chakra-ui/react";
import StudyCardLarge from "views/Internal/StudyCardLarge";

function DetailsView({ study, setEdit }) {
  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg" my="8px">
          Details
        </Heading>
        <Link to={`/study/${study.id}/questionnaire`}>
        <Button colorScheme="green">
          Enroll
        </Button>
        </Link>
      </Flex>
      <StudyCardLarge study={study} />
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