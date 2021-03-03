import React, {useState} from "react";
import styled from "styled-components";

import { auth, firestore } from "database/firebase";
import { useDocument, useCollection } from "hooks";

import { Message, Spinner } from "components";

import { Heading, Box, Badge, Button, Input, useDisclosure } from "@chakra-ui/react";

import StudyDrawer from "./StudyDrawer";
import StudiesRow from "./StudiesRow";
import Meetings from "./Meetings/Meetings";
import Reminders from "./Reminders/Reminders";
import Eligibility from "./Eligibility/Eligibility";

function MyStudies({ user }) {

  const {isOpen, onOpen, onClose} = useDisclosure();

  const [drawer, setDrawer] = useState({ action: "", study: {} });

  const { uid } = auth.currentUser;

  const [studies, loading, error] = useCollection(
    firestore.collection("studies").where("nctID", "in", user.enrolled)
  );

  if (loading || !user || !studies) return <Spinner />;

  if (error)
    return (
      <Heading size="lg" mb="25px">
        Error!
      </Heading>
    );

  const handleDrawer = (action, studyID, responses) => {
    const study = studies.find((study) => study.id === studyID) || {
      meetings: [],
      reminders: [],
      questions: [],
    };
    setDrawer({ action, study, responses });
    onOpen();
  };

  const EMPTY = (
    <Box h="500px">
      <Message
        type="neutral"
        title="My Studies"
        description="You have not enrolled in any studies yet!"
      />
    </Box>
  );

  const LIST = (
    <>
      <Head>
        <Heading fontSize="28px">Studies</Heading>
      </Head>
      <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white">
        {studies && studies.length
          ? studies.map((study, index) => (
              <StudiesRow key={index} study={study} handleDrawer={handleDrawer} uid={uid} />
            ))
          : EMPTY}
      </Box>
      <StudyDrawer
        action={drawer.action}
        studyID={drawer.study.id}
        onClose={onClose}
        isOpen={isOpen}
      >
        {drawer.action === "meetings" && (
          <Meetings study={drawer.study} />
        )}
        {drawer.action === "reminders" && (
          <Reminders study={drawer.study} />
        )}
        {drawer.action === "eligibility survey" && (
          <Eligibility study={drawer.study} responses={drawer.responses}/>
        )}
      </StudyDrawer>
    </>
  );

  return LIST;
};



const Head = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
`;



export default MyStudies;
