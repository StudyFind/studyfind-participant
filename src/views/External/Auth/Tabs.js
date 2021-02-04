import React from "react";
import styled from "styled-components";
import { Flex } from "@chakra-ui/react";

function Tabs({ tab, setTab }) {
  return (
    <Flex borderBottom="1px solid #e7eaf3">
      <Tab selected={tab === "signup"} onClick={() => setTab("signup")}>
        Sign up
      </Tab>
      <Tab selected={tab === "login"} onClick={() => setTab("login")}>
        Login
      </Tab>
    </Flex>
  );
}

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

export default Tabs;
