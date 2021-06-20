import styled from "styled-components";

import { useLocation } from "react-router-dom";

import { Link } from "components";
import { Box, Flex, Grid, Heading, Text, Image, Avatar } from "@chakra-ui/react";
import { FaSearch, FaBell, FaUserCircle, FaClipboard } from "react-icons/fa";

import StudyFindLogo from "images/logo.png";

function Sidebar({ name, email }) {
  const { pathname } = useLocation();

  const isSelected = (path) => {
    const pagename = path.split("/")[1];
    const truename = pathname.split("/")[1];
    return pagename === truename;
  };

  const links = [
    { name: "Find Studies", path: "/search", icon: <FaSearch /> },
    { name: "My Studies", path: "/MyStudies", icon: <FaClipboard /> },
    { name: "Notifications", path: "/notifications", icon: <FaBell /> },
    { name: "Account", path: "/account/profile", icon: <FaUserCircle /> },
  ];

  return (
    <Flex direction="column" w="280px" h="100vh" position="fixed" bg="blue.900" zIndex="100">
      <LogoLink to="/" isWrapper>
        <Image h="1.75rem" mr="10px" src={StudyFindLogo} />
        <Heading fontSize="1.5rem" color="white">
          StudyFind
        </Heading>
      </LogoLink>
      <Grid mb="auto">
        {links.map((link, i) => (
          <NavLink key={i} to={link.path} selected={isSelected(link.path)} isWrapper>
            {link.icon}
            {link.name}
          </NavLink>
        ))}
      </Grid>
      <Box p="15px">
        <Flex rounded="md" align="center">
          <Avatar name={name} bg="blue.500" color="white" h="42px" w="42px" mr="10px" />
          <Box>
            <Text fontSize="0.9rem" color="white" fontWeight="500" isTruncated maxWidth="180px">
              {name}
            </Text>
            <Text fontSize="0.9rem" color="gray.400" isTruncated maxWidth="180px">
              {email}
            </Text>
          </Box>
        </Flex>
      </Box>
    </Flex>
  );
}

const LogoLink = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;
`;

const NavLink = styled(Link)`
  padding: 20px;
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
