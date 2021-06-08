import styled from "styled-components";
import { Heading, Button } from "@chakra-ui/react";
import { Form } from "components";

const AuthForm = styled(Form)`
  width: 100%;
  padding: 30px;
  display: grid;
  grid-gap: 15px;
`;

const AuthHeading = ({ children, ...rest }) => (
  <Heading fontSize="1.75rem" mb="6px" color="blue.500" textAlign="center" {...rest}>
    {children}
  </Heading>
);

const AuthInput = ({ as: As, ...rest }) => <As size="lg" {...rest} />;

const AuthButton = ({ children, loading, ...rest }) => (
  <Button
    size="lg"
    colorScheme="blue"
    type="submit"
    isLoading={loading}
    loadingText={children}
    {...rest}
  >
    {children}
  </Button>
);

const AuthTabLink = styled.button`
  all: unset;
  cursor: pointer;
  margin: auto;
  color: #718096;
  font-size: 0.9rem;
  border-bottom: 1px dashed grey;

  &:hover,
  &:focus {
    color: rgb(49, 130, 207);
    border-color: rgb(49, 130, 207);
    text-decoration: none;
  }
`;

export default {
  Form: AuthForm,
  Heading: AuthHeading,
  Input: AuthInput,
  Button: AuthButton,
  TabLink: AuthTabLink,
};
