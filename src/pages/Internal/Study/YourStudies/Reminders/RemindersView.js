import { Grid } from "@chakra-ui/react";
import ReminderCardParticipant from "components/feature/Participants/ReminderCard/ReminderCardParticipant";
import RemindersEmpty from "./RemindersEmpty";

function RemindersView({ reminders, handleConfirm }) {
  return reminders?.length ? (
    <Grid gap="15px" padding="15px">
      {reminders.map((reminder, i) => (
        <ReminderCardParticipant
          key={i}
          index={i}
          reminder={reminder}
          handleConfirm={() => handleConfirm(reminder)}
        />
      ))}
    </Grid>
  ) : (
    <RemindersEmpty />
  );
}

export default RemindersView;
