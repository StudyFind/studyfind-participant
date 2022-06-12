import { helpers } from "utils";
import { Heading } from "@chakra-ui/react";

import ReminderWeekdays from "./ReminderWeekdays";
import ReminderTimes from "./ReminderTimes";
import ReminderDates from "./ReminderDates";

function ReminderDetails({ title, startDate, endDate, times }) {
  const [weekdays, timeStrings] =
    helpers.convertOffsetsToWeekdaysAndTimes(times);

  return (
    <>
      <Heading size="md">{title}</Heading>
      <ReminderDates startDate={startDate} endDate={endDate} />
      <ReminderWeekdays weekdays={weekdays} />
      <ReminderTimes times={timeStrings} />
    </>
  );
}

export default ReminderDetails;
