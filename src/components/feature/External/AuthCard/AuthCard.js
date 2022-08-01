import { useState } from "react";
import { useDetectDevice } from "hooks";

import { Box } from "@chakra-ui/react";

import AuthForm from "./AuthForm";
import { AuthHeading } from "./Blocks";

function AuthCard() {
  const exists = localStorage.getItem("exists");
  const defaultTab = exists === "true" ? "login" : "signup";
  const [tab, setTab] = useState(defaultTab);

  let heading = "Login"
  const { isPhone } = useDetectDevice();
  if (tab === 'signup') {
    heading = "Sign up"
  }
  if (tab === "forgotPassword") {
    heading = "Forgot Password?";
  }
  if (tab === "login") {
    heading = "Login";
  }

  return (
    <Box
      boxShadow={!isPhone && '2xl'}
      paddingY={isPhone ? '80px' : '40px'}
      borderRadius="20px"
      width={isPhone ? "100%" : "400px"}
    >
      <AuthHeading tab={tab} setTab={setTab}>
        {heading}
      </AuthHeading>
      <AuthForm tab={tab} setTab={setTab} />
    </Box>
  );
}

export default AuthCard;
