import React from "react";
import { signout } from "database/auth";
import { FaDoorOpen } from "react-icons/fa";

import { Flex, Heading, Button } from "@chakra-ui/react";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

function Settings() {
  return (
    <>
      <Flex justify="space-between" align="center" mb="25px">
        <Heading size="lg" my="8px">
          Settings
        </Heading>
        <Button colorScheme="red" onClick={signout} leftIcon={<FaDoorOpen />}>
          Sign out
        </Button>
      </Flex>
      <Flex gridGap="20px">
        <ChangePassword />
        <DeleteAccount />
      </Flex>
    </>
  );
}

export default Settings;
