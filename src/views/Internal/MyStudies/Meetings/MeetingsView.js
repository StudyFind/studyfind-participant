import React from "react";
import styled from "styled-components";
import { format } from "functions";
import { Heading, Box, Grid, Flex, IconButton, Text, Button } from "@chakra-ui/react";
import { FaPencilAlt, FaTrashAlt, FaExternalLinkAlt, FaPlusCircle } from "react-icons/fa";

function MeetingsView({ meetings, handleConfirm, user }) {

  const moment = require('moment');
  require('moment-timezone');

  const formatTimestamp = (timestamp) => {
    const convertedTimestamp = moment.utc(timestamp).tz(user.timezone).format('YYYY-MM-DD hh:mm A');
    const date = new Date(convertedTimestamp);
    const [hours, minutes] = [date.getHours(), date.getMinutes()];
    const formattedDate = format.date(date);
    const formattedTime = format.time(`${hours}:${minutes}`);
    return `${formattedDate} at ${formattedTime}`;
  };

  return (
    <Grid p="25px" gap="15px">
      {meetings &&
        meetings.map((meeting, index) => (
          <Box key={index} borderWidth="1px" bg="white" rounded="md" p="15px">
            <Heading size="md">{meeting.name}</Heading>
            <Text color="gray.500" fontSize="0.9rem" mb="8px">
              {formatTimestamp(meeting.time)}
            </Text>
            <ExternalLink href={meeting.link} target="_blank">
              <Flex align="center" gridGap="4px">
                Link to Meeting
                <Text fontSize="0.8rem">
                  <FaExternalLinkAlt />
                </Text>
              </Flex>
            </ExternalLink>
            <Flex justify="space-between" align="center" mt="16px">
              <Flex gridGap="4px">
                {meeting.confirmedByParticipant?
                  (<Button colorScheme="green">
                    {"Confirmed"}
                   </Button>
                  ) : (
                  <Button colorScheme="blue" onClick={() => handleConfirm(meeting)}>
                    {"Confirm"}
                  </Button>
                  )
                  }
              </Flex>
              <Text color="gray.500" fontSize="0.9rem" fontStyle="italic"></Text>
            </Flex>
          </Box>
        ))}
    </Grid>
  );
}

const ExternalLink = styled.a`
  color: #3182ce;
  text-decoration: underline;
`;

export default MeetingsView;
