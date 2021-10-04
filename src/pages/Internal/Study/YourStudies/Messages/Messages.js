import { useEffect, useRef } from "react";
import { usePagination, usePathParams } from "hooks";
import { auth, firestore } from "database/firebase";
import { message } from "database/mutations";

import { Grid } from "@chakra-ui/react";
import { Loader } from "components";

import MessageList from "components/feature/Participants/Messages/MessageList";
import MessageInput from "components/feature/Participants/Messages/MessageInput";

function Messages() {
  const { studyID } = usePathParams();
  const participantID = auth.currentUser.uid;

  const bottomRef = useRef();

  const messagesQuery = firestore
    .collection("studies")
    .doc(studyID)
    .collection("participants")
    .doc(participantID)
    .collection("messages")
    .orderBy("time", "desc");

  const {
    documents: messages,
    loading,
    loadingMore,
    handleLoadMore,
    fetchedAll,
  } = usePagination(messagesQuery, 15);

  const scrollToBottom = () => {
    bottomRef?.current?.scrollIntoView();
  };

  useEffect(() => {
    if (!loading) {
      scrollToBottom();
    }
  }, [loading]);

  const handleMessageSend = (text) => {
    return message
      .send(studyID, participantID, { text })
      .then(() => scrollToBottom());
  };

  const handleMessageRead = (messageID) => {
    return message.read(studyID, participantID, messageID);
  };

  if (loading) {
    return <Loader height="calc(100vh - 80px)" />;
  }

  return (
    <Grid height="100%" gridTemplateRows="1fr 49px">
      <MessageList
        uid={auth.currentUser.uid}
        messages={messages.slice().reverse()}
        fetchedAll={fetchedAll}
        loadingMore={loadingMore}
        handleLoadMore={handleLoadMore}
        handleMessageRead={handleMessageRead}
        bottomRef={bottomRef}
      />
      <MessageInput handleMessageSend={handleMessageSend} />
    </Grid>
  );
}

export default Messages;
