import React from "react";

import { useAuthForm } from "hooks";
import { forgotPassword } from "database/auth";

import {
  AuthForm,
  AuthHeading,
  AuthEmail,
  AuthButton,
  AuthTabLink,
} from "views/External/Auth/Blocks";

import { Message } from "components";

function ForgotPassword({ setTab }) {
  const {
    inputs,
    errors,
    success,
    loading,
    handleChange,
    handleSubmit,
  } = useAuthForm({
    initial: { email: "" },
    onSubmit: forgotPassword,
  });

  if (success) {
    return (
      <Message
        status="success"
        title="Email Sent!"
        description="Check your email for a password reset link"
        padding="40px 60px"
      >
        <AuthTabLink onClick={() => setTab("login")}>Back to login</AuthTabLink>
      </Message>
    );
  }

  return (
    <AuthForm onSubmit={() => handleSubmit(inputs.email)}>
      <AuthHeading>Forgot Password</AuthHeading>
      <AuthEmail
        value={inputs.email}
        error={errors.email}
        onChange={handleChange}
      />
      <AuthButton loading={loading}>Request Password Reset Email</AuthButton>
      <AuthTabLink onClick={() => setTab("login")}>Back to login</AuthTabLink>
    </AuthForm>
  );
}

export default ForgotPassword;
