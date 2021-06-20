import { useEffect, forwardRef } from "react";
import { useRealtimePagination } from "hooks";

import { auth } from "database/firebase";

import { Box, Text, Flex, Button } from "@chakra-ui/react";
import { Loader } from "components";

import Disclaimer from "./Disclaimer";
import Message from "./Message";

function MessageList({ autoscroll, messagesRef }, ref) {
  const MESSAGES_PER_REQUEST = 15;

  const [messages, loading, error, handleFetchAdditional, additionalLoading, fetchedAll] =
    useRealtimePagination(messagesRef.orderBy("time", "desc"), MESSAGES_PER_REQUEST);

  useEffect(() => {
    !loading && autoscroll();
  }, [loading]);

  if (loading) return <Loader />;
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
      <Flex direction="column" overflowY="scroll" gridGap="8px" p="20px">
        {messages &&
          messages
            .map((message) => (
              <Message
                key={message.id}
                message={message}
                messagesRef={messagesRef}
                isUser={message.user === auth.currentUser.uid}
              />
            ))
            .reverse()}
        <Box mt="60px" ref={ref} />
      </Flex>
    </>
  );
}

export default forwardRef(MessageList);
