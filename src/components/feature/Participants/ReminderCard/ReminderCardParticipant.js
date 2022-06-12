import ReminderDetails from "./ReminderDetails";

import Wrapper from "../Wrapper";
import Confirm from "../Confirm";

function ReminderCardParticipant({ reminder, handleConfirm }) {
  return (
    <Wrapper>
      <ReminderDetails
        title={reminder.title}
        startDate={reminder.startDate}
        endDate={reminder.endDate}
        times={reminder.times}
      />
      <Confirm
        confirmedByParticipant={reminder.confirmedByParticipant}
        handleConfirm={handleConfirm}
      />
    </Wrapper>
  );
}

export default ReminderCardParticipant;
