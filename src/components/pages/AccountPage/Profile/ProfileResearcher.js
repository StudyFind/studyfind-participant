import { Grid } from "@chakra-ui/react";
import { TextInput, TextareaInput } from "components";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";

function ProfileResearcher({
  values,
  showButtons,
  handleCancel,
  handleUpdate,
  handleSetProfileAttribute,
}) {
  return (
    <AccountWrapper
      showButtons={showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <AccountHeader
        title="Profile"
        description="The profile section contains personal information like your organization and background"
      />
      <Grid gap="25px">
        <TextInput
          label="Organization"
          name="organization"
          value={values.organization}
          onChange={handleSetProfileAttribute}
        />
        <TextareaInput
          label="Background"
          name="background"
          height="108px"
          value={values.background}
          onChange={handleSetProfileAttribute}
        />
      </Grid>
    </AccountWrapper>
  );
}

export default ProfileResearcher;
