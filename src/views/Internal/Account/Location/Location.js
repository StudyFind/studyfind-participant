import React from 'react'
import { Box, Grid, Tooltip } from "@chakra-ui/react";

import AccountHeader from "../AccountHeader";
import AccountCheckbox from "../AccountCheckbox";
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';

function Location() {

    return (
        <>
          <AccountHeader
            title="Location"
            description="We use the selected location to display nearby studies in your area"
          />
          <Grid gap="25px">
            <AccountCheckbox
              title="Auto Detect Location"
              description="Automatically detects and updates your location each time you use StudyFind"
            //   name="location"
            //   value={inputs.preferences.timezone.autodetect}
            //   onChange={() => handleTimezone("autodetect", !inputs?.preferences?.timezone?.autodetect)}
            />
            <GooglePlacesAutocomplete
                apiKey="AIzaSyAed_hgBp7VzxxTXlC9Buh9l_6gmNgNK1g"
                selectProps={{placeholder: "Enter your location"}}
            />
            {//NEED TO ADAPT TOOLTIP
            /* <Tooltip
              label={
                inputs.preferences.timezone.autodetect &&
                "Disable Auto Detect Timezone by unchecking the box above to manually enter your preferred timezone"
              }
            >
            </Tooltip> */}
          </Grid>
        </>
      );
}

export default Location;