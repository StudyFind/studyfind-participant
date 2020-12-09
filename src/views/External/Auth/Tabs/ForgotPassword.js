import React from "react";

import { useAuthForm } from "hooks";
import { sendPasswordResetEmail } from "database";
import { Form, Heading, Email, Button, TabLink } from "views/External/Auth/Blocks";
import { Box, Message } from "components";

function ForgotPassword({ setTab }) {
  const { inputs, errors, success, loading, handleInput, handleSubmit } = useAuthForm({
    initial: { email: "" },
    onSubmit: sendPasswordResetEmail,
  });

  if (success) {
    return (
      <Box p="40px 30px">
        <Message
          type="success"
          title="Email Sent!"
          description="Check your email for a password reset link"
        >
          <TabLink onClick={() => setTab("login")}> Back to login </TabLink>
        </Message>
      </Box>
    );
  }

  return (
    <Form onSubmit={() => handleSubmit(inputs.email)}>
      <Heading>Forgot Password</Heading>
      <Email value={inputs.email} error={errors.email} onChange={handleInput} />
      <Button loading={loading}>Request Password Reset Email</Button>
      <TabLink onClick={() => setTab("login")}>Back to login</TabLink>
    </Form>
  );
}

export default ForgotPassword;
