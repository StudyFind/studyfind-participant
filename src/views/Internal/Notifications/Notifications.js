import { Heading, Spinner, Box } from "@chakra-ui/react";
import Notification from "./Notification";

function Notifications() {
  const loading = false;
  const notifications = [
    {
      title: "Accepted to Research Study!",
      description:
        "A new participant Amazing Alpaca showed interest in your study titled blah blah blah",
      type: "interest",
      timestamp: 1606778762,
    },
    {
      title: "Alexis Hudson messaged you from study NCT04316676!",
      description:
        "A new participant Mindful Monkey showed interest in your study titled blah blah blah",
      type: "message",
      timestamp: 1606778762,
    },
    {
      title: "You have participated in 25 studies!",
      description: "Your study titled blah blah blah recruited 50 participants in total",
      type: "milestone",
      timestamp: 1606778762,
    },
    {
      title: "Appointment Reminder",
      description:
        "This is to remind you about your call with Alexis Hudson at 11:00pm on Sunday, October 31st",
      type: "reminder",
      timestamp: 1606778762,
    },
  ];

  const LOAD = <Spinner />;

  const BODY = (
    <>
      <Heading size="lg" mb="25px">
        Notifications
      </Heading>
      <Box borderWidth="1px" rounded="md" bg="white">
        {notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </Box>
    </>
  );

  return loading ? LOAD : BODY;
}

export default Notifications;
