import ReminderDetails from "./ReminderDetails";

import Wrapper from "../Wrapper";
import Confirm from "../Confirm";

function ReminderCardParticipant({ reminder }) {
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
        handleConfirm={() => console.log("confirm")}
      />
    </Wrapper>
  );
}

export default ReminderCardParticipant;
