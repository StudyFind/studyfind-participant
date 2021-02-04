import React, { useState } from "react";
import { Card } from "components";
import { Flex } from "@chakra-ui/react";

import Tabs from "./Tabs";
import Form from "./Form";

function Auth() {
  const getDefaultTab = () => {
    const url = new URL(window.location.href);
    const mode = url.searchParams.get("mode");
    const accountExists = localStorage.getItem("exists") === "true";

    return mode || (accountExists ? "login" : "signup");
  };

  const [tab, setTab] = useState(getDefaultTab());

  return (
    <Flex justify="center" align="center" h="100vh">
      <Card w="350px" bg="#f8f9fa">
        <Tabs tab={tab} setTab={setTab} />
        <Form tab={tab} setTab={setTab} />
      </Card>
    </Flex>
  );
}

export default Auth;
