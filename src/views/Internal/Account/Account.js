import React, { useState, useEffect } from "react";
import moment from "moment-timezone";

import { firestore, auth } from "database/firebase";
import { useDocument } from "hooks";

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

function Account() {
  const [user, loading, error] = useDocument(
    firestore.collection("participants").doc(auth.currentUser.uid)
  );

  const [initial, setInitial] = useState({});
  const [filter, setFilter] = useState({});
  const [personal, setPersonal] = useState({});

  useEffect(() => {
    if (user) {
      const userInitial = {
        sex: user.sex,
        birthdate: user.birthdate,
        timezone: user.timezone,
        availability: user.availability,
      };

      setFilter(user.filter);
      setPersonal(userInitial);
      setInitial(userInitial);
    }
  }, [user]);

  const handleFilterChange = ({ target: { name, checked } }) => {
    setFilter((prev) => ({ ...prev, [name]: checked }));
  };

  const handlePersonalChange = (name, value) => {
    setPersonal((prev) => ({ ...prev, [name]: value }));
  };

  const handleCancel = () => {
    setFilter(user.filter);
    setPersonal();
  };

  const handleUpdate = () => {
    firestore
      .collection("participants")
      .doc(user.id)
      .update({
        filter,
        ...personal,
      });
  };

  if (loading || !user) return <Spinner />;

  if (error)
    return (
      <Heading size="lg" mb="25px">
        Error!
      </Heading>
    );

  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg">Welcome Back, {user.name.split(" ")[0]}</Heading>
        {!(
          lodash.isEqual(personal, initial) &&
          lodash.isEqual(filter, user.filter)
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
        <Box bg="white" borderWidth="1px" rounded="md" p="20px" w="100%">
          <Heading size="md">Search Preferences</Heading>
          <Divider my="15px" />
          <Grid gap="20px">
            {Object.entries(user.filter).map((p, i) => (
              <FormControl key={i} display="flex" alignItems="center">
                <Switch
                  name={p[0]}
                  value={filter[p[0]]}
                  onChange={handleFilterChange}
                  defaultChecked={p[1]}
                />
                <FormLabel ml="10px" my="0" textTransform="capitalize">
                  {p[0].split("_").join(" ")}
                </FormLabel>
              </FormControl>
            ))}
          </Grid>
        </Box>
      </Flex>
    </>
  );
}

export default Account;
