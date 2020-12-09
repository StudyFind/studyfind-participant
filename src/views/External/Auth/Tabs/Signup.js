import React from "react";

import { useAuthForm } from "hooks";
import { signup } from "database";
import { Form, Heading, Email, Password, Button, TabLink } from "views/External/Auth/Blocks";
import { Message, Box } from "components";

function Login({ setTab }) {
  const { inputs, errors, success, loading, handleInput, handleSubmit } = useAuthForm({
    initial: { email: "", password: "" },
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
    <Form onSubmit={() => handleSubmit(inputs.email, inputs.password)}>
      <Heading>Create Account!</Heading>
      <Email value={inputs.email} error={errors.email} onChange={handleInput} />
      <Password value={inputs.password} error={errors.password} onChange={handleInput} />
      <Button loading={loading}>Sign up</Button>
      <TabLink onClick={() => setTab("login")}>Have an account?</TabLink>
    </Form>
  );
}

export default Login;
