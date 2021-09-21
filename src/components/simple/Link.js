import styled from "styled-components";
import { HashLink } from "react-router-hash-link";
import { Link as RouterLink } from "react-router-dom";
import { Link as ChakraLink } from "@chakra-ui/react";

export const Link = ({ to, isWrapper, ...rest }) => {
  // if link starts with "http" it is treated as external and is opened in new tab
  // else link is treated as internal react router link

  if (to.substring(0, 4) === "http") {
    return <StyledLink href={to} color="blue.500" isExternal isWrapper={isWrapper} {...rest} />;
  }

  if (to.includes("#")) {
    return <StyledLink as={HashLink} to={to} {...rest} />;
  }

  return <StyledLink as={RouterLink} to={to} {...rest} />;
};

const StyledLink = styled(ChakraLink)`
  ${(props) =>
    props.isWrapper &&
    `
    all: unset;
    display: block;
    cursor: pointer;
  `}
`;
