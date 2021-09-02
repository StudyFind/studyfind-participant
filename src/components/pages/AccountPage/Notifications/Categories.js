import { Grid } from "@chakra-ui/react";

import AccountSubHeader from "../AccountSubHeader";
import { SwitchInput } from "components";

function Categories({ categories, handleCategories }) {
  return (
    <Grid gap="8px">
      <AccountSubHeader
        subtitle="Categories"
        subdescription="Notification categories you care about"
      />
      <Grid gap="4px">
        <SwitchInput
          label="Account"
          name="account"
          value={categories?.account}
          onChange={handleCategories}
        />
        <SwitchInput
          label="Studies"
          name="studies"
          value={categories?.studies}
          onChange={handleCategories}
        />
        <SwitchInput
          label="Participants"
          name="participants"
          value={categories?.participants}
          onChange={handleCategories}
        />
        <SwitchInput
          label="Meetings"
          name="meetings"
          value={categories?.meetings}
          onChange={handleCategories}
        />
        <SwitchInput
          label="Messages"
          name="messages"
          value={categories?.messages}
          onChange={handleCategories}
        />
      </Grid>
    </Grid>
  );
}

export default Categories;
