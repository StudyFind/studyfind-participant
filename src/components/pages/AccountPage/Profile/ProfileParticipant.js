import { Grid } from "@chakra-ui/react";
import { RadioInput, TextInput, TextareaInput } from "components";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";

function ProfileParticipant({
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
        description="The profile section contains personal information like your sex, birthdate, and availability"
      />
      <Grid gap="25px">
        <RadioInput
          label="Biological Sex"
          name="sex"
          value={values.sex}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
          onChange={handleSetProfileAttribute}
          allowUnselect
        />
        <TextInput
          type="date"
          name="birthdate"
          label="Birthdate"
          value={values.birthdate}
          onChange={handleSetProfileAttribute}
        />
        <TextareaInput
          label="Availability"
          name="availability"
          limit={500}
          height="100px"
          value={values.availability}
          onChange={handleSetProfileAttribute}
          placeholder="Put a little something about your weekly availability"
        />
      </Grid>
    </AccountWrapper>
  );
}

export default ProfileParticipant;
