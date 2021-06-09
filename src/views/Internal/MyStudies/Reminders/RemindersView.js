import { Grid } from "@chakra-ui/react";

import RemindersCard from "./RemindersCard";

function RemindersView({ reminders, handleConfirm }) {
  return (
    <Grid gap="15px">
      {reminders &&
        reminders.map((reminder, i) => (
          <RemindersCard key={i} index={i} reminder={reminder} handleConfirm={handleConfirm} />
        ))}
    </Grid>
  );
}

export default RemindersView;
