import { Grid } from "@chakra-ui/react";
import { TextInput, Radio, TextareaInput } from "components";

import AccountHeader from "../AccountHeader";

function Profile({ inputs, handleChange }) {
  return (
    <>
      <AccountHeader
        title="Profile"
        description="The profile section contains information like your organization and background"
      />
      <Grid gap="25px">
        <Radio
          label="Biological Sex"
          name="sex"
          value={inputs.sex}
          options={[
            { label: "Male", value: "Male" },
            { label: "Female", value: "Female" },
          ]}
          onChange={handleChange}
        />
        <TextInput
          type="date"
          name="birthdate"
          label="Birthdate"
          value={inputs.birthdate}
          onChange={handleChange}
        />
        <TextareaInput
          label="Availability"
          name="availability"
          limit={500}
          value={inputs.availability}
          onChange={handleChange}
          placeholder="Put a little something about your weekly availability"
        />
      </Grid>
    </>
  );
}

export default Profile;
