import { Grid } from "@chakra-ui/react";

import ReminderCardParticipant from "components/feature/Participants/ReminderCard/ReminderCardParticipant";

function RemindersView({ reminders, handleConfirm }) {
  return (
    <Grid gap="15px">
      {reminders &&
        reminders.map((reminder, i) => (
          <ReminderCardParticipant
            key={reminder.id}
            reminder={reminder}
            handleConfirm={() => handleConfirm(reminder)}
          />
        ))}
    </Grid>
  );
}

export default RemindersView;
