import React from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";

import { auth, firestore } from "database/firebase";
import { notifications } from "templates";

import { Link } from "components";
import { Box, Flex, Text } from "@chakra-ui/react";

import NotificationIcon from "./NotificationIcon";
import NotificationTime from "./NotificationTime";

function NotificationItem({ notification }) {
  const [read] = useState(notification.read);
  /*
    ^^^^^
    done to save original value of notification.read when the component first rendered
    the purpose is to save the original read state of the notification even though read
    is changed from false to true in the useEffect below
    the notification prop is attached to a firebase realtime listener hook which will change
    the value of notification.read as soon as its updated
    this update would change the blue "unread" background to the white "background" almost
    immediately without conveying to the user that this is a new notification
    the blue background would've disappeared the next time the component is loaded as the
    original notification.read value would be true when the component first renders
  */

  useEffect(() => {
    if (!read) {
      firestore
        .collection("researchers")
        .doc(auth.currentUser.uid)
        .collection("notifications")
        .doc(notification.id)
        .update({ read: true });
    }
  }, []);

  const getTemplate = (type, meta) => {
    const generateTemplate = notifications[type] || notifications.defaultTemplate;
    return generateTemplate(meta);
  };

  const { type, meta, time } = notification;
  const { title, description, color, icon, link } = getTemplate(type, meta);

  return (
    <NotificationLink to={link}>
      <Flex align="center" p="12px" gridGap="10px" bg={read ? "white" : "blue.50"}>
        <NotificationIcon icon={icon} color={color} />
        <Box width="100%" ml="4px">
          <Flex justify="space-between" align="center">
            <Text size="sm" fontWeight="600">
              {title}
            </Text>
            <NotificationTime time={time} />
          </Flex>
          <Text fontSize="sm" color="gray.500">
            {description}
          </Text>
        </Box>
      </Flex>
    </NotificationLink>
  );
}

const NotificationLink = styled(Link)`
  display: block;
  width: 100%;
`;

export default NotificationItem;
