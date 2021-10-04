import { useColor } from "hooks";
import { Box, Grid, Flex } from "@chakra-ui/react";
import { Disclaimer, LoadMoreButton } from "components";

import Message from "./Message";

function MessageList({
  uid,
  messages,
  fetchedAll,
  handleMessageRead,
  handleLoadMore,
  loadingMore,
  bottomRef,
}) {
  const messageListbackground = useColor("#f8f9fa", "gray.800");

  return (
    <Box overflowY="scroll" background={messageListbackground}>
      <Flex justify="center" width="100%" padding="20px" paddingBottom="0">
        {fetchedAll ? (
          <Box maxWidth="330px">
            <Disclaimer>
              Messages are not end-to-end encrypted. Please avoid sharing
              personal health information through this chat.
            </Disclaimer>
          </Box>
        ) : (
          <LoadMoreButton onClick={handleLoadMore} isLoading={loadingMore} />
        )}
      </Flex>
      <Flex
        justify="flex-start"
        direction="column"
        padding="20px"
        gridGap="8px"
        width="100%"
      >
        {messages?.map((message) => (
          <Message
            key={message.id}
            message={message}
            handleMessageRead={handleMessageRead}
            isUserMessageSender={message.user === uid}
          />
        ))}
      </Flex>
      <Box ref={bottomRef} />
    </Box>
  );
}

export default MessageList;
