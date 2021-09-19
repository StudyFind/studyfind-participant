import MeetingDetails from "./MeetingDetails";

import Wrapper from "../Wrapper";
import Confirm from "../Confirm";

function MeetingCardParticipant({ meeting, handleConfirm }) {
  return (
    <Wrapper>
      <MeetingDetails name={meeting.name} time={meeting.time} />
      <Confirm
        confirmedByParticipant={meeting.confirmedByParticipant}
        handleConfirm={handleConfirm}
      />
    </Wrapper>
  );
}

export default MeetingCardParticipant;
