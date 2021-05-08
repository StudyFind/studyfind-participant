import React from "react";
import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

function Link({ to, isWrapper, ...rest }) {
  // if link starts with "http" it is treated as external and is opened in new tab
  // else link is treated as internal react router link
  return to.substring(0, 4) === "http" ? (
    <StyledLink href={to} isExternal color="blue.500" isWrapper={isWrapper} {...rest} />
  ) : (
    <StyledLink as={RouterLink} to={to} isWrapper={isWrapper} {...rest} />
  );
}

const StyledLink = styled(ChakraLink)`
  ${(props) =>
    props.isWrapper &&
    `
    all: unset;
    display: block;
    cursor: pointer;
  `}
`;

export default Link;
