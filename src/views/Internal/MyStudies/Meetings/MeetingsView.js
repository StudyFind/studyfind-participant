import React from "react";

import { Grid } from "@chakra-ui/react";
import MeetingsCard from "./MeetingsCard"

function MeetingsView({ meetings, handleConfirm }) {
  return (
    <Grid gap="15px">
      {meetings?.map((meeting) => (
        <MeetingsCard key={meeting.id} meeting={meeting} handleConfirm={handleConfirm} />
      ))}
    </Grid>
  );
}

export default MeetingsView;
