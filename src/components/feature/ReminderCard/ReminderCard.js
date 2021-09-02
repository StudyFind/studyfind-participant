import { useColor } from "hooks";
import { helpers } from "utils";
import { Heading, Box, Flex } from "@chakra-ui/react";

import ReminderStatus from "./ReminderStatus";
import ReminderButtons from "./ReminderButtons";
import ReminderWeekdays from "./ReminderWeekdays";
import ReminderTimes from "./ReminderTimes";
import ReminderDates from "./ReminderDates";

function RemindersCard({ reminder, handleEdit, handleDelete }) {
  const [weekdays, times] = helpers.convertOffsetsToWeekdaysAndTimes(
    reminder.times
  );

  const border = useColor("gray.200", "gray.700");
  const background = useColor("white", "gray.900");

  return (
    <Box
      borderWidth="1px"
      borderColor={border}
      background={background}
      rounded="md"
      padding="15px"
      width="100%"
    >
      <Heading size="md">{reminder.title}</Heading>
      <ReminderDates
        startDate={reminder.startDate}
        endDate={reminder.endDate}
      />
      <ReminderWeekdays weekdays={weekdays} />
      <ReminderTimes times={times} />
      <Flex justify="space-between" align="center" marginTop="16px">
        <ReminderButtons
          handleEdit={() => handleEdit(reminder)}
          handleDelete={() => handleDelete(reminder.id)}
        />
        <ReminderStatus confirmed={reminder.confirmedByParticipant} />
      </Flex>
    </Box>
  );
}

export default RemindersCard;
