import { Grid } from "@chakra-ui/react";
import { CheckboxInput } from "components";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";

function Notifications({
  values,
  showButtons,
  handleCancel,
  handleUpdate,
  handleSetNotificationsAttribute,
}) {
  return (
    <AccountWrapper
      showButtons={showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <Grid gap="20px">
        <AccountHeader
          title="Notification"
          description="The notification section allows you to change what notifications you want to see and where you want to receive them"
        />
        <Grid gap="16px" paddingY="4px" maxW="400px">
          <CheckboxInput
            name="local"
            label="Receive Local Notifications"
            details="Sends notifications in your browser window"
            value={values?.notifications?.local}
            onChange={handleSetNotificationsAttribute}
          />
          <CheckboxInput
            name="email"
            label="Receive Email Notifications"
            details={`Sends notifications to your inbox at ${values.email}`}
            value={values?.notifications?.email}
            onChange={handleSetNotificationsAttribute}
          />
          <CheckboxInput
            name="phone"
            label="Receive Text Notifications"
            details={`Sends notifications to your phone at ${values.phone}`}
            value={values?.notifications?.phone}
            onChange={handleSetNotificationsAttribute}
          />
        </Grid>
      </Grid>
    </AccountWrapper>
  );
}

export default Notifications;
