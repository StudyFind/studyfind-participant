import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { NavHashLink as HashLink } from "react-router-hash-link";
import $ from "jquery";

import { Button, Heading } from "components";

import SFLogo from "images/logo.png";

function Header() {
  const [active, setActive] = useState(false);
  const LIMIT = 50;

  $(document).scroll(() => {
    const scroll = $(document).scrollTop();
    setActive(scroll >= LIMIT);
  });

  return (
    <Box active={active}>
      <Logo to="/#">
        <Icon src={SFLogo} />
        <Name fontSize="1.7rem">StudyFind</Name>
      </Logo>
    </Box>
  );
}

const Box = styled.div`
  position: fixed;
  top: 0;
  z-index: 100;
  background: transparent;
  padding: 50px;
  width: 100vw;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media only screen and (max-width: 600px) {
    padding: 30px;
  }

  ${(props) =>
    props.active &&
    `
    padding: 24px 50px;
    background: white;
    box-shadow: 0 0 10px 0 rgb(240,240,240) !important;

    @media only screen and (max-width: 600px) {
      padding: 24px 30px;
    }
  `}
`;

const Logo = styled(HashLink)`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Icon = styled.img`
  height: 2rem;
  margin-right: 10px;
`;

const Name = styled(Heading)``;

export default Header;
