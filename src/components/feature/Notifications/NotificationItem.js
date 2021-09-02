import styled from "styled-components";
import { useState, useEffect } from "react";
import { useColor, useDetectDevice } from "hooks";

import getNotificationTemplate from "./templates/getNotificationTemplate";

import { Card, Link } from "components";
import { Box, Flex, Text } from "@chakra-ui/react";

import NotificationIcon from "./NotificationIcon";
import NotificationTime from "./NotificationTime";

function NotificationItem({ side, notification, handleNotificationRead }) {
  const [initialRead] = useState(notification.read);
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

  const { id, code, meta, time, read } = notification;
  const { title, body, icon, color, link } = getNotificationTemplate({
    code,
    side,
    meta,
  });

  useEffect(() => {
    if (!initialRead) {
      handleNotificationRead(id);
    }
  }, []);

  const { isPhone } = useDetectDevice();

  const readBorderColor = useColor("gray.200", "gray.700");
  const unreadBorderColor = useColor("blue.100", "blue.600");

  const readBackgroundColor = useColor("white", "gray.900");
  const unreadBackgroundColor = useColor("blue.50", "blue.900");

  return (
    <NotificationLink to={link}>
      <Card
        key={notification.id}
        width="100%"
        borderColor={read ? readBorderColor : unreadBorderColor}
        background={read ? readBackgroundColor : unreadBackgroundColor}
      >
        <Flex align="flex-start" padding="12px" gridGap="10px" rounded="md">
          <NotificationIcon icon={icon} color={color} />
          <Box width="100%" marginLeft="4px">
            <Flex
              direction={isPhone ? "column" : "row"}
              justify={isPhone ? "" : "space-between"}
              align={isPhone ? "flex-start" : "center"}
            >
              <Text size="sm" fontWeight="600">
                {title}
              </Text>
              <NotificationTime time={time} />
            </Flex>
            <Text fontSize="sm" color="gray.500">
              {body}
            </Text>
          </Box>
        </Flex>
      </Card>
    </NotificationLink>
  );
}

const NotificationLink = styled(Link)`
  display: block;
  width: 100%;
`;

export default NotificationItem;
