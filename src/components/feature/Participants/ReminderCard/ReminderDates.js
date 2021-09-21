import { datetime } from "utils";
import { Text } from "@chakra-ui/react";

function ReminderDates({ startDate, endDate }) {
  const displayStartDate = datetime.getFriendlyDate(startDate);
  const displayEndDate = datetime.getFriendlyDate(endDate);

  return (
    <Text color="gray.500" fontSize="0.9rem" marginBottom="8px">
      {displayStartDate} to {displayEndDate}
    </Text>
  );
}

export default ReminderDates;
