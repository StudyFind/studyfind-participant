import React from "react";
import styled from "styled-components";
import { Heading, Spinner, Box } from "@chakra-ui/react";
import Notification from "./Notification";

function Notifications() {
  const loading = false;
  const notifications = [
    {
      title: "New Participant!",
      description:
        "A new participant Amazing Alpaca showed interest in your study titled blah blah blah",
      type: "interest",
      timestamp: 1606778762,
    },
    {
      title: "New Participant!",
      description:
        "A new participant Mindful Monkey showed interest in your study titled blah blah blah",
      type: "message",
      timestamp: 1606778762,
    },
    {
      title: "50 participants!",
      description: "Your study titled blah blah blah recruited 50 participants in total",
      type: "milestone",
      timestamp: 1606778762,
    },
    {
      title: "Appointment Reminder",
      description:
        "This is to remind you about your call with Lazy Llama at 11:00pm on Sunday, October 31st",
      type: "reminder",
      timestamp: 1606778762,
    },
  ];

  const LOAD = <Spinner />;

  const BODY = (
    <>
      <Heading mb="25px">Notifications</Heading>
      <Box borderWidth="1px" rounded="md" bg="white">
        {notifications.map((notification, index) => (
          <Notification key={index} notification={notification} />
        ))}
      </Box>
    </>
  );

  return <Page>{loading ? LOAD : BODY}</Page>;
}

const Page = styled.div`
  padding: 30px;
  height: 100%;
  background: #f8f9fa;
`;

export default Notifications;
