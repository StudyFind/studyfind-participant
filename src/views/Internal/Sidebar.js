import React from "react";
import { auth } from "database/firebase";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";
import StudyFindLogo from "images/logo.png";

import { Box, Heading, Flex, Text, Avatar } from "@chakra-ui/react";
import { FaSearch, FaBell, FaCog, FaUserCircle } from "react-icons/fa";

function Sidebar({ user }) {
  const location = useLocation();

  const links = [
    { name: "Search", path: "/search", icon: <FaSearch /> },
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
          <NavLink key={index} to={link.path} selected={location.pathname === link.path}>
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </Links>
      <Box p="15px">
        <Flex rounded="md" align="center">
          <Avatar
            name={user && user.name}
            bg="blue.500"
            color="white"
            h="42px"
            w="42px"
            mr="10px"
          />
          <Info>
            <Text fontSize="0.9rem" color="white" fontWeight="500" isTruncated maxWidth="100px">
              {user ? user.name : "Your Account"}
            </Text>
            <Text fontSize="0.9rem" color="gray.500" isTruncated maxWidth="180px">
              {auth.currentUser.email}
            </Text>
          </Info>
        </Flex>
      </Box>
    </Fixed>
  );
}

const Fixed = styled(Box)`
  width: 280px;
  height: 100vh;
  background: #2b6cb0;
  position: fixed;
  display: flex;
  flex-direction: column;
  z-index: 100;
`;

const Info = styled.div``;

const Logo = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const LogoIcon = styled.img`
  height: 1.75rem;
  margin-right: 10px;
`;

const LogoName = styled(Heading)``;

const Links = styled.div`
  display: grid;
  margin-bottom: auto;
`;

const NavLink = styled(Link)`
  padding: 25px 20px;
  display: flex;
  grid-gap: 12px;
  align-items: center;
  color: rgb(255, 255, 255, 0.5);
  font-size: 16px;
  font-weight: 600;

  &:hover {
    color: white;
  }

  ${(props) =>
    props.selected &&
    `
    color: white;
    background: rgb(0, 0, 0, 0.2);
  `}
`;

export default Sidebar;
