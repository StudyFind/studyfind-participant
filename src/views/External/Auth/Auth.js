import { useState } from "react";
import { Box, Flex } from "@chakra-ui/react";

import AuthTabs from "./AuthTabs";
import AuthForm from "./AuthForm";

function Auth() {
  const exists = localStorage.getItem("exists");
  const defaultTab = exists === "true" ? "login" : "signup";
  const [tab, setTab] = useState(defaultTab);

  return (
    <Flex justify="center" align="center" h="100vh">
      <Box rounded="md" borderWidth="1px" w="350px" bg="#f8f9fa">
        <AuthTabs tab={tab} setTab={setTab} />
        <AuthForm tab={tab} setTab={setTab} />
      </Box>
    </Flex>
  );
}

export default Auth;
