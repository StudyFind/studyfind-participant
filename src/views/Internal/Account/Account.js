import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

import { firestore, auth } from "database/firebase";

import lodash from "lodash";

import {
  FormControl,
  FormLabel,
  Heading,
  Box,
  Flex,
  Grid,
  Switch,
  Button,
  Divider,
  Checkbox,
  Text
} from "@chakra-ui/react";
import { Spinner, Radio, Textarea, Input, Select } from "components";

function Account({ user }) {

  const [initial, setInitial] = useState({});
  const [personal, setPersonal] = useState({});

  const resetUser = () => {
    const userInitial = {
      sex: user.sex,
      birthdate: user.birthdate,
      timezone: user.timezone,
      availability: user.availability,
      preferences: user.preferences,
    };

    setPersonal(userInitial);
    setInitial(userInitial);
  };

  useEffect(() => {
    if (user) {
      resetUser();
    }
  }, [user]);

  const handlePersonalChange = (name, value) => {
    setPersonal((prev) => ({ ...prev, [name]: value }));
  };

  const handlePreferencesToggle = (e) => {
    const { name, checked } = e.target;
    setPersonal((prev) => ({ ...prev, preferences: {...prev.preferences, [name]: checked} }));
  };

  const handleCancel = () => {
    resetUser();
  };

  const handleUpdate = () => {
    firestore
      .collection("participants")
      .doc(user.id)
      .update({
        ...personal
      });
  };

  if (!user) return <Spinner />;

  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg" my="8px">
          Welcome Back, {user.name.split(" ")[0]}
        </Heading>
        {!(
          lodash.isEqual(personal, initial)
        ) && (
          <Flex gridGap="10px">
            <Button color="gray.500" onClick={handleCancel}>
              Cancel
            </Button>
            <Button colorScheme="green" onClick={handleUpdate}>
              Save Changes
            </Button>
          </Flex>
        )}
      </Flex>
      <Flex gridGap="30px">
        <Box bg="white" borderWidth="1px" rounded="md" p="20px" w="100%">
          <Heading size="md">Personal Info</Heading>
          <Divider my="15px" />
          <Grid gap="25px">
            <Radio
              label="Biological Sex"
              name="sex"
              value={personal.sex}
              options={["Male", "Female"]}
              onChange={handlePersonalChange}
            />
            <Input
              type="date"
              name="birthdate"
              label="Birthdate"
              value={personal.birthdate}
              onChange={handlePersonalChange}
            />
            <Grid gap="25px">
              <Select
                label="Timezone Location"
                name="timezone"
                options={moment.tz.zonesForCountry("US")}
                value={personal.timezone}
                onChange={handlePersonalChange}
              />
              <Checkbox
                mt="1px"
                size="md"
                name="autodetectTimezone"
                isChecked={personal.preferences && personal.preferences.autodetectTimezone}
                onChange={handlePreferencesToggle}
                alignItems="flex-start"
              >
                <Grid gap="2px">
                  <Heading size="sm" mt="-1px">
                    Auto Detect Timezone
                  </Heading>
                  <Text fontSize="sm">
                    Automatically detects and updates your local timezone each time
                    you use StudyFind
                  </Text>
                </Grid>
              </Checkbox>
            </Grid>
            <Textarea
              label="Availability"
              name="availability"
              value={personal.availability}
              limit={500}
              onChange={handlePersonalChange}
              placeholder="Put a little something about your weekly availability"
            />
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default Account;
