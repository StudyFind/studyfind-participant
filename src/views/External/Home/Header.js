import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { NavHashLink as HashLink } from "react-router-hash-link";
import {
  Heading,
  Flex,
  Box,
  Image,
  useMediaQuery,
  Button,
} from "@chakra-ui/react";
import SFLogo from "images/logo.png";
import $ from "jquery";

function Header() {
  const LIMIT = 50;
  const [active, setActive] = useState(false);
  const activeClass = active && "header--active";
  const [isTablet, setIsTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  // identify if window is compact
  const handleWindowSizeChange = () => {
    if (window.innerWidth < 450) {
      setIsPhone(true);
      setIsTablet(false);
    } else if (window.innerWidth < 800) {
      setIsTablet(true);
      setIsPhone(false);
    } else {
      setIsPhone(false);
      setIsTablet(false);
    }
  };

  // check for window size change
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  // update if the window is compact
  useEffect(() => {
    handleWindowSizeChange();
  }, []);

  $("body").scroll(() => {
    const scroll = $("body").scrollTop();
    setActive(scroll >= LIMIT);
  });

  return (
    <ResponsiveBox
      bgColor={active ? "white" : ""}
      boxShadow={active ? "md" : ""}
    >
      <Flex justifyContent="space-between" alignItems="center">
        <HashLink to="/">
          <Flex align="center">
            <Image
              src={SFLogo}
              h={isPhone ? "1.5rem" : isTablet ? "1.75rem" : "2rem"}
              mr={isPhone ? "6px" : isTablet ? "8px" : "10px"}
            />
            <Heading
              fontSize={isPhone ? "1.2rem" : isTablet ? "1.45rem" : "1.7rem"}
            >
              StudyFind
            </Heading>
          </Flex>
        </HashLink>
        <HashLink to="/auth">
          <Button
            size={isPhone ? "sm" : isTablet ? "md" : "lg"}
            bgColor="#387DFF"
            textColor="#ffffff"
            _hover={{ bgColor: "#2D65CC" }}
            _active={{ bgColor: "#1C3F80" }}
          >
            Start Now
          </Button>
        </HashLink>
      </Flex>
    </ResponsiveBox>
  );
}

const ResponsiveBox = styled(Box)`
  position: fixed;
  top: 0;
  padding: 20px;
  width: 100vw;
  z-index: 5;

  @media (min-aspect-ratio: 8/10) and (max-aspect-ratio: 1/1) {
    background-color: white;
  }

  @media (max-width: 800px) {
    padding: 15px 20px;
  }

  @media (max-aspect-ratio: 8/10) {
    background-color: white;
  }

  @media (max-aspect-ratio: 47/100) {
    background-color: white;
  }
`;

export default Header;
