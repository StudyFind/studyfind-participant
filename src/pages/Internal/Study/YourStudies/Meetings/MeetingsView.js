import { Grid } from "@chakra-ui/react";
import MeetingCardParticipant from "components/feature/Participants/MeetingCard/MeetingCardParticipant";
import MeetingsEmpty from "./MeetingsEmpty";

function MeetingsView({ meetings, handleConfirm }) {
  return meetings?.length ? (
    <Grid gap="15px" padding="15px">
      {meetings.map((meeting) => (
        <MeetingCardParticipant
          key={meeting.id}
          meeting={meeting}
          handleConfirm={() => handleConfirm(meeting)}
        />
      ))}
    </Grid>
  ) : (
    <MeetingsEmpty />
  );
}

export default MeetingsView;
