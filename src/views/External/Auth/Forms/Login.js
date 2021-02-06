import React from "react";

import { useAuthForm } from "hooks";
import { signin } from "database/auth";

import { Form, Heading, Email, Password, Button, TabLink } from "views/External/Auth/Blocks";

function Login({ setTab }) {
  const { inputs, errors, loading, handleChange, handleSubmit } = useAuthForm({
    initial: { email: "", password: "" },
    onSubmit: signin,
  });

  return (
    <Form onSubmit={() => handleSubmit(inputs.email, inputs.password)}>
      <Heading>Welcome Back!</Heading>
      <Email value={inputs.email} error={errors.email} onChange={handleChange} />
      <Password value={inputs.password} error={errors.password} onChange={handleChange} />
      <Button loading={loading}>Login</Button>
      <TabLink onClick={() => setTab("forgotPassword")}>Forgot Password?</TabLink>
    </Form>
  );
}

export default Login;
