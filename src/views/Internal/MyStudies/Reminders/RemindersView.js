import React from "react";
import moment from "moment";
import styled from "styled-components";

import {
  Heading,
  Box,
  Grid,
  Flex,
  IconButton,
  Button,
  Text,
  Tag,
  TagLabel,
} from "@chakra-ui/react";
import { FaPlusCircle } from "react-icons/fa";

import { FaPencilAlt, FaTrashAlt } from "react-icons/fa";

function RemindersView({
  reminders,
  formatDate,
  getDaysFromOffsets,
  getTimesFromOffsets,
  handleConfirm
}) {
  const weekdayAcronyms = ["S", "M", "T", "W", "T", "F", "S"];

  return (
    <Grid gap="15px">
      {reminders &&
        reminders.map((reminder, index) => (
          <Box key={index} borderWidth="1px" bg="white" rounded="md" p="15px">
            <Heading size="md">{reminder.title}</Heading>
            <Text color="gray.500" fontSize="0.9rem" mb="8px">
              {formatDate(reminder.startDate)} to {formatDate(reminder.endDate)}
            </Text>
            <Weekdays>
              {getDaysFromOffsets(reminder.times).map((value, index) => (
                <Tag
                  key={index}
                  color={value ? "white" : "gray.500"}
                  bg={value ? "blue.500" : "gray.100"}
                >
                  {weekdayAcronyms[index]}
                </Tag>
              ))}
            </Weekdays>
            <Flex gridGap="8px" my="8px">
              {getTimesFromOffsets(reminder.times).map((time, index) => (
                <Tag key={index} colorScheme="blue">
                  <TagLabel>{moment(time, ["HH:mm"]).format("hh:mma")}</TagLabel>
                </Tag>
              ))}
            </Flex>
            <Flex justify="space-between" align="center" mt="16px">
              <Flex gridGap="4px">
                {reminder.confirmedByParticipant?
                  (<Button colorScheme="green">
                    {"Confirmed"}
                   </Button>
                  ) : (
                  <Button colorScheme="blue" onClick={() => handleConfirm(reminder)}>
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

const Weekdays = styled(Flex)`
  & > span {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
`;

export default RemindersView;