import React from "react";

import styled from "styled-components";
import { Box, Center } from "components";

import Login from "./Tabs/Login";
import Signup from "./Tabs/Signup";
import ForgotPassword from "./Tabs/ForgotPassword";
import ResetPassword from "./Tabs/ResetPassword";
import VerifyEmail from "./Tabs/VerifyEmail";

function AuthView({ success, tab, setTab }) {
  const render = {
    login: <Login setTab={setTab} />,
    signup: <Signup setTab={setTab} />,
    forgotPassword: <ForgotPassword setTab={setTab} />,
    resetPassword: <ResetPassword setTab={setTab} />,
    verifyEmail: <VerifyEmail setTab={setTab} />,
  };

  return (
    <Screen>
      <Center h="100%" w="100%">
        <Box w="350px" bg="#f8f9fa" borderWidth="1px" borderColor="gray" rounded="md">
          <Tabs>
            <Tab selected={tab === "signup"} onClick={() => setTab("signup")}>
              Sign up
            </Tab>
            <Tab selected={tab === "login"} onClick={() => setTab("login")}>
              Login
            </Tab>
          </Tabs>
          {render[tab]}
        </Box>
      </Center>
    </Screen>
  );
}

const Tabs = styled.div`
  display: flex;
  border-bottom: 1px solid #e7eaf3;
`;

const Tab = styled.button`
  flex: 1;
  color: #96a0aa;
  text-align: center;
  padding: 1rem 0.75rem;
  cursor: pointer;
  font-weight: 600;
  margin-bottom: -2px;
  outline: none;

  &:hover,
  &:focus,
  &:active {
    color: rgb(49, 130, 207);
  }

  ${(props) =>
    props.selected &&
    `
      color: rgb(49, 130, 207);
      border-bottom: 3px solid rgb(49, 130, 207);
  `}
`;

const Screen = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
`;

export default AuthView;
