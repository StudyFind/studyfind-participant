import { Grid } from "@chakra-ui/react";
import MeetingCardParticipant from "components/feature/Internal/Study/Participants/Meeting/MeetingCardParticipant";

function MeetingsView({ meetings, handleConfirm }) {
  return (
    <Grid gap="15px">
      {meetings?.map((meeting) => (
        <MeetingCardParticipant
          key={meeting.id}
          meeting={meeting}
          handleConfirm={() => handleConfirm(meeting)}
        />
      ))}
    </Grid>
  );
}

export default MeetingsView;
