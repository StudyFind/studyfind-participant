import React from "react";

import { Flex, Heading } from "@chakra-ui/react";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";

function Settings() {
  return (
    <>
      <Heading size="lg" mb="25px">
        Settings
      </Heading>
      <Flex gridGap="20px">
        <ChangePassword />
        <DeleteAccount />
      </Flex>
    </>
  );
}

export default Settings;
