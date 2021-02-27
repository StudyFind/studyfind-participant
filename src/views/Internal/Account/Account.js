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
            <Select
              name="timezone"
              label="Timezone"
              value={personal.timezone}
              options={moment.tz.names()}
              onChange={handlePersonalChange}
            />
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
