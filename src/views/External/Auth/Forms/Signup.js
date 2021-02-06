import React from "react";

import { useAuthForm } from "hooks";
import { signup } from "database/auth";

import { Form, Heading, Name, Email, Password, Button, TabLink } from "views/External/Auth/Blocks";
import { Message } from "components";

function Login({ setTab }) {
  const { inputs, errors, success, loading, handleChange, handleSubmit } = useAuthForm({
    initial: { name: "", email: "", password: "" },
    onSubmit: signup,
  });

  if (success) {
    return (
      <Message
        type="success"
        title="Account Created!"
        description="Check your email for a verification link"
        padding="40px 30px"
      >
        <TabLink onClick={() => setTab("login")}> Back to login </TabLink>
      </Message>
    );
  }

  return (
    <Form onSubmit={() => handleSubmit(inputs.name, inputs.email, inputs.password)}>
      <Heading>Create Account!</Heading>
      <Name value={inputs.name} error={errors.name} onChange={handleChange} />
      <Email value={inputs.email} error={errors.email} onChange={handleChange} />
      <Password value={inputs.password} error={errors.password} onChange={handleChange} />
      <Button loading={loading}>Sign up</Button>
      <TabLink onClick={() => setTab("login")}>Have an account?</TabLink>
    </Form>
  );
}

export default Login;
