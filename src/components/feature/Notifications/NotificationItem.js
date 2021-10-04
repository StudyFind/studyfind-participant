import styled from "styled-components";
import { useState, useEffect } from "react";
import { useColor, useDetectDevice } from "hooks";

import { Card, Link } from "components";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  FaCalendar,
  FaCalendarCheck,
  FaCalendarDay,
  FaCalendarMinus,
  FaCalendarPlus,
  FaCheckSquare,
  FaClipboard,
  FaClock,
  FaComment,
  FaDotCircle,
  FaMagic,
  FaUser,
  FaUserClock,
} from "react-icons/fa";

import NotificationIcon from "./NotificationIcon";
import NotificationTime from "./NotificationTime";

const NotificationLink = styled(Link)`
  display: block;
  width: 100%;
`;

function NotificationItem({ notification, handleNotificationRead }) {
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

  const { code, time, title, description, link, read } = notification;

  const { icon, color } = {
    CREATE_ACCOUNT: { icon: FaMagic, color: "purple" },
    CREATE_STUDY: { icon: FaClipboard, color: "green" },
    DELETE_STUDY: { icon: FaClipboard, color: "red" },
    PARTICIPANT_ENROLLED: { icon: FaUser, color: "teal" },
    PARTICIPANT_CONFIRMED_MEETING: { icon: FaCalendarCheck, color: "teal" },
    PARTICIPANT_CONFIRMED_REMINDER: { icon: FaCheckSquare, color: "teal" },
    RESEARCHER_SENT_MESSAGE: { icon: FaComment, color: "teal" },
    RESEARCHER_CREATED_MEETING: { icon: FaCalendarPlus, color: "green" },
    RESEARCHER_UPDATED_MEETING: { icon: FaCalendar, color: "blue" },
    RESEARCHER_DELETED_MEETING: { icon: FaCalendarMinus, color: "red" },
    RESEARCHER_CREATED_REMINDER: { icon: FaUserClock, color: "green" },
    RESEARCHER_UPDATED_REMINDER: { icon: FaUserClock, color: "blue" },
    RESEARCHER_DELETED_REMINDER: { icon: FaUserClock, color: "red" },
    RESEARCHER_CHANGED_PARTICIPANT_STATUS: { icon: FaDotCircle, color: "teal" },
    MEETING_NOW: { icon: FaCalendarDay, color: "cyan" },
    REMINDER_NOW: { icon: FaClock, color: "cyan" },
  }[code];

  useEffect(() => {
    if (!initialRead) {
      handleNotificationRead(notification);
    }
  }, []);

  const { isPhone } = useDetectDevice();

  const titleColor = useColor("black", "white");

  const readBorderColor = useColor("gray.200", "gray.700");
  const unreadBorderColor = useColor("blue.100", "blue.600");

  const readBackgroundColor = useColor("white", "gray.900");
  const unreadBackgroundColor = useColor("blue.50", "blue.900");

  // convert external link to internal link otherwise Link component will open link in new tab
  const hostname = "https://researcher.studyfind.org";
  const internalLink = link.substring(hostname.length);

  return (
    <NotificationLink to={internalLink} isWrapper>
      <Card
        width="100%"
        borderColor={read ? readBorderColor : unreadBorderColor}
        background={read ? readBackgroundColor : unreadBackgroundColor}
      >
        <Flex
          align={isPhone ? "flex-start" : "center"}
          padding="12px"
          gridGap="10px"
          rounded="md"
        >
          <NotificationIcon icon={icon} color={color} />
          <Box width="100%" marginLeft="4px">
            <Flex
              direction={isPhone ? "column" : "row"}
              justify={isPhone ? "" : "space-between"}
              align={isPhone ? "flex-start" : "center"}
            >
              <Text size="sm" fontWeight="600" color={titleColor}>
                {title}
              </Text>
              <NotificationTime time={time} />
            </Flex>
            <Text fontSize="sm" color="gray.500">
              {description}
            </Text>
          </Box>
        </Flex>
      </Card>
    </NotificationLink>
  );
}

export default NotificationItem;
