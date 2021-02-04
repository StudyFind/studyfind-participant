import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import StudyFindLogo from "images/logo.png";

import { Box, Heading, Flex, Text } from "components";

import { FaBell, FaSearch, FaCog, FaUserCircle, FaLocationArrow } from "react-icons/fa";
import { Avatar, Tooltip } from "@chakra-ui/react";

function Header() {
  const location = useLocation();

  const links = [
    { name: "Search", path: "/search", icon: <FaSearch /> },
    { name: "Locate", path: "/locate", icon: <FaLocationArrow /> },
    { name: "Notifications", path: "/notifications", icon: <FaBell /> },
    { name: "Settings", path: "/settings", icon: <FaCog /> },
    { name: "Account", path: "/account", icon: <FaUserCircle /> },
  ];

  return (
    <Fixed bg="blue.900">
      <Logo to="/#">
        <LogoIcon src={StudyFindLogo} />
        <LogoName fontSize="1.5rem" color="white">
          StudyFind
        </LogoName>
      </Logo>
      <Links>
        {links.map((link, index) => (
          <Tooltip label={link.name} placement="bottom">
            <NavLink key={index} to={link.path} selected={location.pathname === link.path}>
              {link.icon}
              {link.name}
            </NavLink>
          </Tooltip>
        ))}
      </Links>
      <Box p="15px">
        <Flex rounded="md" align="center">
          <Avatar name="Yohan Jhaveri" bg="blue.500" color="white" h="42px" w="42px" mr="10px" />
          <Info>
            <Text fontSize="0.9rem" color="white" fontWeight="500" isTruncated maxWidth="100px">
              Yohan Jhaveri
            </Text>
            <Tooltip label="yohanjhaveri@gmail.com" placement="right">
              <Text fontSize="0.9rem" color="gray.500" isTruncated maxWidth="180px">
                yohanjhaveri@gmail.com
              </Text>
            </Tooltip>
          </Info>
        </Flex>
      </Box>
    </Fixed>
  );
}

const Fixed = styled(Box)`
  width: 100%;
  height: 80px;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  top: 0;
  z-index: 100;
  padding: 20px 30px;
`;

const Info = styled.div``;

const Logo = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LogoIcon = styled.img`
  height: 1.75rem;
  margin-right: 10px;
`;

const LogoName = styled(Heading)``;

const Links = styled.div`
  display: flex;
  grid-gap: 40px;
`;

const NavLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  grid-gap: 6px;
  color: rgb(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: white;
  }

  // border: 1px solid rgb(255, 255, 255, 0.5);
  border-radius: 100px;

  ${(props) => props.selected && "color: white"}
`;

export default Header;
