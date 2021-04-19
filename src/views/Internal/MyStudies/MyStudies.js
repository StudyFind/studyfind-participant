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
import Messages from "./Messages/Messages";

function MyStudies({ user, studies }) {

  const {isOpen, onOpen, onClose} = useDisclosure();

  const [drawer, setDrawer] = useState({ action: "", study: {} });

  const { uid } = auth.currentUser;

  if (!user || !studies) return <Spinner />;

  const enrolledStudies = studies.filter((study) => user.enrolled.includes(study.id));

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
        <Heading fontSize="28px">My Studies</Heading>
      </Head>
      <Box borderWidth="1px" rounded="md" overflow="hidden" bg="white">
        {enrolledStudies && enrolledStudies.length
          ? enrolledStudies.map((study, index) => (
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
        {drawer.action === "messages" && (
          <Messages study={drawer.study} participant={{id: uid}}/>
        )}
        {drawer.action === "meetings" && (
          <Meetings study={drawer.study} user={user}/>
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
