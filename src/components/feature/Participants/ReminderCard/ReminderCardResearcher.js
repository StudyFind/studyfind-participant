import { Flex } from "@chakra-ui/react";

import ReminderDetails from "./ReminderDetails";

import Wrapper from "../Wrapper";
import Buttons from "../Buttons";
import Status from "../Status";

function ReminderCardResearcher({ reminder, handleEdit, handleDelete }) {
  return (
    <Wrapper>
      <ReminderDetails
        title={reminder.title}
        startDate={reminder.startDate}
        endDate={reminder.endDate}
        times={reminder.times}
      />
      <Flex justify="space-between" align="center" marginTop="16px">
        <Buttons handleEdit={handleEdit} handleDelete={handleDelete} />
        <Status confirmed={reminder.confirmedByParticipant} />
      </Flex>
    </Wrapper>
  );
}

export default ReminderCardResearcher;
