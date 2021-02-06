import React from "react";

import { useAuthForm } from "hooks";
import { forgotPassword } from "database/auth";

import { Form, Heading, Email, Button, TabLink } from "views/External/Auth/Blocks";
import { Message } from "components";

function ForgotPassword({ setTab }) {
  const { inputs, errors, success, loading, handleChange, handleSubmit } = useAuthForm({
    initial: { email: "" },
    onSubmit: forgotPassword,
  });

  if (success) {
    return (
      <Message
        type="success"
        title="Email Sent!"
        description="Check your email for a password reset link"
        padding="40px 30px"
      >
        <TabLink onClick={() => setTab("login")}> Back to login </TabLink>
      </Message>
    );
  }

  return (
    <Form onSubmit={() => handleSubmit(inputs.email)}>
      <Heading>Forgot Password</Heading>
      <Email value={inputs.email} error={errors.email} onChange={handleChange} />
      <Button loading={loading}>Request Password Reset Email</Button>
      <TabLink onClick={() => setTab("login")}>Back to login</TabLink>
    </Form>
  );
}

export default ForgotPassword;
