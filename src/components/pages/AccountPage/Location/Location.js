import { Box, Grid, Tooltip } from "@chakra-ui/react";
import { TextInput, CheckboxInput } from "components";

import AccountWrapper from "../AccountWrapper";
import AccountHeader from "../AccountHeader";

function Location({ values, showButtons, handleCancel, handleUpdate, handleSetLocationAttribute }) {
  const autodetect = values?.location?.autodetect;

  return (
    <AccountWrapper
      showButtons={showButtons}
      handleCancel={handleCancel}
      handleUpdate={handleUpdate}
    >
      <Grid gap="25px">
        <AccountHeader
          title="Location"
          description="We use the selected location to find and show studies nearest to you"
        />
        <CheckboxInput
          name="autodetect"
          label="Auto Detect Location"
          details="Automatically detects and updates your local location each time you use StudyFind"
          value={autodetect}
          onChange={handleSetLocationAttribute}
        />
        <Tooltip
          label={
            autodetect &&
            "Disable Auto Detect Location by unchecking the box above to manually enter your preferred location"
          }
        >
          <Box>
            <TextInput
              label="Location"
              name="address"
              value={values?.location?.address}
              onChange={handleSetLocationAttribute}
              isDisabled={autodetect}
            />
          </Box>
        </Tooltip>
      </Grid>
    </AccountWrapper>
  );
}

export default Location;
