import React from "react";
import { useContext } from "react";
import styled from "styled-components";

import { UserContext, StudiesContext } from "context";
import { Heading, Box } from "@chakra-ui/react";

import { Message } from "components";
import StudiesRow from "./StudiesRow";

function MyStudies() {
  const user = useContext(UserContext);
  const studies = useContext(StudiesContext);

  const enrolled = studies.filter((study) => user.enrolled.includes(study.id));

  if (!enrolled?.length) {
    return (
      <Box h="500px">
        <Message
          type="neutral"
          title="My Studies"
          description="You have not enrolled in any studies yet!"
        />
      </Box>
    );
  }

  return (
    <>
      <Head>
        <Heading fontSize="28px">My Studies</Heading>
      </Head>
      <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white">
        {enrolled?.map((study) => (
          <StudiesRow key={study.id} study={study} uid={user.id} />
        ))}
      </Box>
    </>
  );
}

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;

export default MyStudies;
