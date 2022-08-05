import { useState } from "react";
import { useColor, useDetectDevice } from "hooks";

import { Box } from "@chakra-ui/react";

import AuthForm from "./AuthForm";
import { AuthHeading } from "./Blocks";

function AuthCard() {
  const exists = localStorage.getItem("exists");
  const defaultTab = exists === "true" ? "login" : "signup";
  const [tab, setTab] = useState(defaultTab);
  const background = useColor("white", "gray.900");

  let heading = "Login"
  const { isPhone } = useDetectDevice();
  if (tab === 'signup') {
    heading = "Sign up"
  }
  if (tab === "forgotPassword") {
    heading = "Forgot Password?";
  }
  if (tab === "login") {
    heading = "Sign in";
  }

  return (
    <Box
      boxShadow={!isPhone && "2xl"}
      paddingY={isPhone ? "80px" : "30px"}
      borderRadius="20px"
      width={isPhone ? "100%" : "400px"}
      bg={background}
    >
      <AuthHeading tab={tab} setTab={setTab}>
        {heading}
      </AuthHeading>
      <AuthForm tab={tab} setTab={setTab} />
    </Box>
  );
}

export default AuthCard;
