import React from "react";

import { Grid, Heading, Text, Checkbox } from "@chakra-ui/react";

function AccountCheckbox({ name, value, title, description, onChange }) {
  return (
    <Checkbox
      mt="1px"
      size="md"
      alignItems="flex-start"
      name={name}
      isChecked={value}
      onChange={(e) => onChange(name, e.target.checked)}
    >
      <Grid gap="2px">
        <Heading size="sm" mt="-1px">
          {title}
        </Heading>
        <Text fontSize="sm">{description}</Text>
      </Grid>
    </Checkbox>
  );
}

export default AccountCheckbox;
