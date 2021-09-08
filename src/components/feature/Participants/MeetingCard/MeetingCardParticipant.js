import MeetingDetails from "./MeetingDetails";

import Wrapper from "../Wrapper";
import Confirm from "../Confirm";

function MeetingCardParticipant({ meeting }) {
  return (
    <Wrapper>
      <MeetingDetails name={meeting.name} time={meeting.time} />
      <Confirm
        confirmedByParticipant={meeting.confirmedByParticipant}
        handleConfirm={() => console.log("confirm")}
      />
    </Wrapper>
  );
}

export default MeetingCardParticipant;
