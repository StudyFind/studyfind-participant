import React from "react";

import { auth } from "database/firebase";
import { Grid } from "@chakra-ui/react";

import AccountHeader from "../AccountHeader";
import AccountToggle from "../AccountToggle";
import AccountCheckbox from "../AccountCheckbox";

function Notifications({ inputs, handleNotificationPreferences, handleNotificationCategories }) {
  return (
    <>
      <Grid gap="10px">
        <AccountHeader
          title="Notification"
          description="Select what notifications you want to recieve and where you want to recieve them"
        />
        <Grid gap="4px">
          <AccountToggle
            label="Account"
            name="account"
            value={inputs.preferences.notifications.categories.account}
            onChange={handleNotificationCategories}
          />
          <AccountToggle
            label="Status"
            name="status"
            value={inputs.preferences.notifications.categories.status}
            onChange={handleNotificationCategories}
          />
          <AccountToggle
            label="Reminders"
            name="reminders"
            value={inputs.preferences.notifications.categories.reminders}
            onChange={handleNotificationCategories}
          />
          <AccountToggle
            label="Meetings"
            name="meetings"
            value={inputs.preferences.notifications.categories.meetings}
            onChange={handleNotificationCategories}
          />
          <AccountToggle
            label="Messages"
            name="messages"
            value={inputs.preferences.notifications.categories.messages}
            onChange={handleNotificationCategories}
          />
        </Grid>
      </Grid>
      <AccountCheckbox
        title="Receive Email Notifications"
        description={`Sends notifications to your inbox at ${auth.currentUser.email}`}
        name="email"
        value={inputs.preferences.notifications.email}
        onChange={handleNotificationPreferences}
      />
    </>
  );
}

export default Notifications;
