import { useEffect } from "react";
import styled from "styled-components";
import moment from "moment-timezone";

import { Flex, Text, Icon } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";

function Message({ message, handleMessageRead, isUserMessageSender }) {
  useEffect(() => {
    if (!isUserMessageSender) {
      handleMessageRead(message.id);
    }
  }, []);

  const placement = isUserMessageSender ? "flex-end" : "flex-start";

  return (
    <Flex direction="column" align={placement}>
      <MessageBox direction="column" align={placement}>
        <Text
          maxWidth="300px"
          padding="5px 10px"
          rounded="md"
          color={isUserMessageSender ? "white" : "gray.700"}
          background={isUserMessageSender ? "blue.500" : "gray.200"}
        >
          {message.text}
        </Text>
        <Meta paddingTop="4px" align="center" gridGap="2px" justify={placement}>
          {isUserMessageSender && (
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
