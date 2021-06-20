import { Grid } from "@chakra-ui/react";

import AccountHeader from "../AccountHeader";
import Categories from "./Categories";
import Methods from "./Methods";

function Notifications({ inputs, handleNotifications, handleCategories }) {
  return (
    <Grid gap="20px">
      <AccountHeader
        title="Notification"
        description="The notification section allows you to change what notifications you want to see and where you want to receive them"
      />
      <Grid gap="20px">
        <Methods
          notifications={inputs?.preferences?.notifications}
          handleNotifications={handleNotifications}
        />
        <Categories
          categories={inputs?.preferences?.notifications?.categories}
          handleCategories={handleCategories}
        />
      </Grid>
    </Grid>
  );
}

export default Notifications;
