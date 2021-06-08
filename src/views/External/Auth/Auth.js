import { useState } from "react";
import { Card } from "components";
import { Flex } from "@chakra-ui/react";

import Tabs from "./Tabs";
import Form from "./Form";

function Auth() {
  const [tab, setTab] = useState(localStorage.getItem("exists") === "true" ? "login" : "signup");

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
