import React from "react";
import styled from "styled-components";
import { Link, useHistory } from "react-router-dom";

import { Heading, Button, IconButton, Flex, Spacer } from "@chakra-ui/react";
import { FaChevronLeft } from "react-icons/fa";
import StudyCardLarge from "views/Internal/StudyCardLarge";

function DetailsView({ study, user }) {
  const history = useHistory();

  return (
    <>
      <Flex align="center" mt="10px" mb="25px">
        <IconButton
          onClick={history.goBack}
          colorScheme="blue"
          mr="5px"
          icon={<FaChevronLeft/>}
        />

        <Heading size="lg" my="8px">
          Details
        </Heading>

        <Spacer/>

        <Flex>

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

      </Flex>
      <StudyCardLarge study={study} />
      <br/>

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
