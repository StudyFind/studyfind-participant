import { Grid } from "@chakra-ui/react";

import { CheckboxInput } from "components";

function Methods({ email, phone, notifications, handleNotifications }) {
  return (
    <Grid gap="16px" paddingY="4px" width="300px">
      <CheckboxInput
        name="local"
        label="Receive Local Notifications"
        details="Sends notifications in your browser window"
        value={notifications?.local}
        onChange={handleNotifications}
      />
      <CheckboxInput
        name="email"
        label="Receive Email Notifications"
        details={`Sends notifications to your inbox at ${email}`}
        value={notifications?.email}
        onChange={handleNotifications}
      />
      <CheckboxInput
        name="local"
        label="Receive Text Notifications"
        details={`Sends notifications to your phone at ${phone}`}
        value={notifications?.phone}
        onChange={handleNotifications}
      />
    </Grid>
  );
}

export default Methods;
