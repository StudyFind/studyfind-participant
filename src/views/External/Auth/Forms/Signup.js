import React from "react";

import { useAuthForm } from "hooks";
import { signup } from "database";
import { Form, Heading, Name, Email, Password, Button, TabLink } from "views/External/Auth/Blocks";
import { Box } from "@chakra-ui/react";
import { Message } from "components";

function Login({ setTab }) {
  const { inputs, errors, success, loading, handleInput, handleSubmit } = useAuthForm({
    initial: { name: "", email: "", password: "" },
    onSubmit: signup,
  });

  if (success) {
    return (
      <Box p="40px 30px">
        <Message
          type="success"
          title="Account Created!"
          description="Check your email for a verification link"
        >
          <TabLink onClick={() => setTab("login")}> Back to login </TabLink>
        </Message>
      </Box>
    );
  }

  return (
    <Form onSubmit={() => handleSubmit(inputs.name, inputs.email, inputs.password)}>
      <Heading>Create Account!</Heading>
      <Name value={inputs.name} error={errors.name} onChange={handleInput} />
      <Email value={inputs.email} error={errors.email} onChange={handleInput} />
      <Password value={inputs.password} error={errors.password} onChange={handleInput} />
      <Button loading={loading}>Sign up</Button>
      <TabLink onClick={() => setTab("login")}>Have an account?</TabLink>
    </Form>
  );
}

export default Login;
