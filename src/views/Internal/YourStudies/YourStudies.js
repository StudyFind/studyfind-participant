import React from "react";
import styled from "styled-components";

import { Heading, Box } from "@chakra-ui/react";
import { firestore } from "database/firebase";
import { useCollection } from "hooks";

import StudyRow from "./StudyRow";

function YourStudies() {
  const [studies, loading, error] = useCollection(
    firestore.collection("studies").where("published", "==", true)
  );

  const LIST = (
    <Page>
      <Head mb="25px">
        <Heading>Your Studies</Heading>
      </Head>
      {studies && (
        <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white">
          {studies.map((study, index) => (
            <StudyRow key={index} study={study} participant={{}} />
          ))}
        </Box>
      )}
    </Page>
  );

  return LIST;
}

const Page = styled.div`
  padding: 30px;
  height: 100%;
  background: #f8f9fa;
  position: relative;
`;

const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
`;

export default YourStudies;
