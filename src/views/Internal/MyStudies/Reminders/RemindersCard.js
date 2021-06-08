import moment from "moment";
import styled from "styled-components";

import { Heading, Box, Flex, Button, Text, Tag, TagLabel } from "@chakra-ui/react";

import { helpers } from "functions";

function RemindersCard({ reminder, handleConfirm }) {
  const weekdayAcronyms = ["S", "M", "T", "W", "T", "F", "S"];

  const [weekdays, times] = helpers.convertOffsetsToWeekdaysAndTimes(reminder.times);

  return (
    <Box borderWidth="1px" bg="white" rounded="md" p="15px">
      <Heading size="md">{reminder.title}</Heading>
      <Text color="gray.500" fontSize="0.9rem" mb="8px">
        {moment(reminder.startDate).format("LL")} to {moment(reminder.endDate).format("LL")}
      </Text>
      <Weekdays>
        {weekdays.map((value, i) => (
          <Tag key={i} color={value ? "white" : "gray.500"} bg={value ? "blue.500" : "gray.100"}>
            {weekdayAcronyms[i]}
          </Tag>
        ))}
      </Weekdays>
      <Flex gridGap="8px" my="8px">
        {times.map((time) => (
          <Tag key={time.id} colorScheme="blue">
            <TagLabel>{moment(time, ["HH:mm"]).format("hh:mma")}</TagLabel>
          </Tag>
        ))}
      </Flex>
      <Flex justify="space-between" align="center" mt="16px">
        <Flex gridGap="4px">
          {reminder.confirmedByParticipant ? (
            <Button colorScheme="green">
              {"Confirmed"}
            </Button>
          ) : (
            <Button colorScheme="blue" onClick={() => handleConfirm(reminder)}>
              {"Confirm"}
            </Button>
          )}
        </Flex>
        <Text color="gray.500" fontSize="0.9rem" fontStyle="italic"></Text>
      </Flex>
    </Box>
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

export default RemindersCard;
