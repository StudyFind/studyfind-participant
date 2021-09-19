import { useState } from "react";
import { useColor, useDetectDevice } from "hooks";

import { Box } from "@chakra-ui/react";

import { AuthProvider } from "./AuthContext";

import AuthTabs from "./AuthTabs";
import AuthForm from "./AuthForm";

import SectionWrapper from "../SectionWrapper";

function AuthCard({ handleSignup, handleLogin, handleForgotPassword }) {
  const exists = localStorage.getItem("exists") === "true";
  const [tab, setTab] = useState(exists ? "login" : "signup");

  const { isPhone } = useDetectDevice();

  const background = useColor("#f8f9fa", "gray.800");
  const borderColor = useColor("gray.200", "gray.700");
  const backgroundColor = useColor("white", "gray.900");

  return (
    <AuthProvider value={{ handleSignup, handleLogin, handleForgotPassword }}>
      <SectionWrapper background={backgroundColor}>
        <Box
          width={isPhone ? "80%" : "350px"}
          rounded="md"
          borderWidth="1px"
          borderColor={borderColor}
          background={background}
        >
          <AuthTabs tab={tab} setTab={setTab} />
          <AuthForm tab={tab} setTab={setTab} />
        </Box>
      </SectionWrapper>
    </AuthProvider>
  );
}

export default AuthCard;
