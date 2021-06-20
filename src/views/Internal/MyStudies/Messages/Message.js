import { useEffect } from "react";
import styled from "styled-components";
import moment from "moment";

import { Flex, Text, Icon } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";

function Message({ message, messagesRef, isUser }) {
  useEffect(() => {
    if (!isUser && !message.read) messagesRef.doc(message.id).update({ read: true });
  }, []);

  return (
    <Flex direction="column" align={isUser ? "flex-end" : "flex-start"}>
      <MessageBox direction="column" align={isUser ? "flex-end" : "flex-start"}>
        <Text
          maxW="300px"
          p="5px 10px"
          rounded="md"
          color={isUser ? "white" : "gray.700"}
          bg={isUser ? "blue.500" : "gray.200"}
        >
          {message.text}
        </Text>
        <Meta pt="4px" align="center" gridGap="2px" justify={`flex-${isUser ? "end" : "start"}`}>
          {isUser && (
            <Icon
              fontSize="12px"
              color={message.read ? "green.500" : "gray.500"}
              as={HiCheckCircle}
            />
          )}
          <Text fontSize="xs" color="gray.500" fontWeight="500">
            {moment(message.time).fromNow()}
          </Text>
        </Meta>
      </MessageBox>
    </Flex>
  );
}

const Meta = styled(Flex)`
  display: none;
`;

const MessageBox = styled(Flex)`
  &:hover > ${Meta} {
    display: flex;
  }
`;

export default Message;
