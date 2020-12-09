import React from "react";
import styled from "styled-components";

import { format } from "functions";
import { Box, Flex, Heading, Text, Icon } from "components";
import { FaCertificate, FaStopwatch, FaUser, FaComment } from "react-icons/fa";

function Notification({ notification }) {
  const icons = {
    milestone: {
      name: FaCertificate,
      color: "green",
    },
    interest: {
      name: FaUser,
      color: "blue",
    },
    reminder: {
      name: FaStopwatch,
      color: "red",
    },
    message: {
      name: FaComment,
      color: "purple",
    },
  };

  const icon = icons[notification.type];

  return (
    <Row>
      <div>
        <Flex
          w="40px"
          h="40px"
          rounded="full"
          bg={`${icon.color}.100`}
          justify="center"
          align="center"
        >
          <Icon w="16px" h="16px" color={`${icon.color}.300`} as={icon.name} />
        </Flex>
      </div>
      <Box width="100%" ml="4px">
        <Flex justify="space-between" align="center">
          <Heading size="sm">{notification.title}</Heading>
          <Text fontSize="xs" color="gray.400">
            {format.date(notification.timestamp)}
          </Text>
        </Flex>
        <Text fontSize="md" color="gray.500">
          {notification.description}
        </Text>
      </Box>
    </Row>
  );
}

const Row = styled.div`
  display: flex;
  align-items: center;
  grid-gap: 10px;
  padding: 15px;

  border-bottom: 1px solid #f1f2f3;

  &:last-child {
    border-bottom: none;
  }
`;

export default Notification;
