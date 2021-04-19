import React, { useState, useEffect, useRef, forwardRef } from "react";

import { auth } from "database/firebase";

import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { Spinner } from "components";

import Disclaimer from "./Disclaimer";
import Message from "./Message";

function MessageList({ autoscroll, messagesRef }, ref) {
  const MESSAGES_PER_REQUEST = 15;
  const listRef = useRef();
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [additionalLoading, setAdditionalLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastDoc, setLastDoc] = useState(null);
  const [fetchedAll, setFetchedAll] = useState(false);

  const transformData = (snapshot) => {
    const documents = [];
    snapshot.forEach((doc) => {
      documents.push({ id: doc.id, ...doc.data() });
    });
    return documents.reverse();
  };

  const handleLive = (prev, documents) => {
    const lastIndex = prev.findIndex((d) => d.id === documents[0].id);
    return prev.slice(0, lastIndex).concat(documents);
  };

  const handleAdditional = (prev, documents) => {
    return documents.concat(prev);
  };

  useEffect(() => {
    messagesRef
      .limit(MESSAGES_PER_REQUEST)
      .orderBy("time", "desc")
      .onSnapshot((snapshot) => {
        setMessages((prev) => {
          const documents = transformData(snapshot);
          return handleLive(prev, documents);
        });

        if (!lastDoc) {
          setLoading(false);
        }

        autoscroll();

        if (snapshot.docs.length < MESSAGES_PER_REQUEST) {
          setFetchedAll(true);
        }

        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);
      });
  }, []);

  const handleFetchAdditional = () => {
    setAdditionalLoading(true);
    messagesRef
      .limit(MESSAGES_PER_REQUEST)
      .orderBy("time", "desc")
      .startAfter(lastDoc)
      .get()
      .then((snapshot) => {
        setMessages((prev) => {
          const documents = transformData(snapshot);
          return handleAdditional(prev, documents);
        });
        setLastDoc(snapshot.docs[snapshot.docs.length - 1]);

        if (snapshot.docs.length < MESSAGES_PER_REQUEST) {
          setFetchedAll(true);
        }
      })
      .catch((err) => setError(err.message))
      .finally(() => setAdditionalLoading(false));
  };

  useEffect(() => {
    if (!loading) autoscroll();
  }, [loading]);

  if (loading) return <Spinner />;
  if (error) return <Text>Error: {JSON.stringify(error)}</Text>;

  return (
    <>
      <Flex justify="center" mb="auto" p="20px">
        {fetchedAll ? (
          <Disclaimer />
        ) : (
          <Button
            onClick={handleFetchAdditional}
            isLoading={additionalLoading}
            variant="outline"
            color="gray.500"
            bg="white"
            size="sm"
          >
            Load more
          </Button>
        )}
      </Flex>
      <Flex direction="column" overflowY="scroll" gridGap="8px" p="20px" ref={listRef}>
        {messages &&
          messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              messagesRef={messagesRef}
              isUser={message.user === auth.currentUser.uid}
            />
          ))}
        <Box mt="60px" ref={ref} />
      </Flex>
    </>
  );
}

export default forwardRef(MessageList);
