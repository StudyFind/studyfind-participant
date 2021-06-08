import { auth } from "database/firebase";
import { Grid } from "@chakra-ui/react";

import AccountCheckbox from "../AccountCheckbox";

function Methods({ notifications, handleNotifications }) {
  return (
    <Grid gap="16px" py="4px" w="300px">
      <AccountCheckbox
        title="Receive Email Notifications"
        description={`Sends notifications to your inbox at ${auth.currentUser.email}`}
        name="email"
        value={notifications?.email}
        onChange={handleNotifications}
      />
      {/* <AccountCheckbox
        title="Receive Website Notifications"
        description="Shows notifications to you while you're logged into your account"
        name="toast"
        value={notifications?.toast}
        onChange={handleNotifications}
      /> */}
    </Grid>
  );
}

export default Methods;
