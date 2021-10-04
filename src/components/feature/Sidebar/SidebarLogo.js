import styled from "styled-components";

import { useColorMode } from "hooks";
import { Link } from "components";
import { Flex, Heading, Icon, Image } from "@chakra-ui/react";

import { FaBars, FaTimes } from "react-icons/fa";
import { FiSun, FiMoon } from "react-icons/fi";

import SFLogo from "images/logo.png";

function SidebarLogo({ isPhone, active, setActive }) {
  const { colorMode, toggleColorMode } = useColorMode();

  const ToggleIcon = active ? FaTimes : FaBars;

  const handleToggleActive = () => {
    if (isPhone) {
      setActive((prev) => !prev);
    }
  };

  return (
    <Flex justify="space-between" align="center" padding="20px">
      <LogoLink to="/" isWrapper>
        <Image height="1.6rem" marginRight="10px" src={SFLogo} />
        <Heading fontSize="1.5rem" color="white">
          StudyFind
        </Heading>
      </LogoLink>
      {isPhone || (
        <Flex
          color="white"
          background="whiteAlpha.200"
          rounded="full"
          height="28px"
          width="28px"
          justify="center"
          align="center"
          onClick={toggleColorMode}
        >
          <Icon as={colorMode === "light" ? FiMoon : FiSun} />
        </Flex>
      )}
      {isPhone && (
        <ToggleIcon size="24px" color="white" onClick={handleToggleActive} />
      )}
    </Flex>
  );
}

const LogoLink = styled(Link)`
  all: unset;
  cursor: pointer;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export default SidebarLogo;
