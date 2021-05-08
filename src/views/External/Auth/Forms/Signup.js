import React from "react";

import { useAuthForm } from "hooks";
import { signup } from "database/auth";

import {
  AuthForm,
  AuthHeading,
  AuthName,
  AuthEmail,
  AuthPassword,
  AuthButton,
  AuthTabLink,
} from "views/External/Auth/Blocks";

import { Message } from "components";

function Signup({ setTab }) {
  const {
    inputs,
    errors,
    success,
    loading,
    handleChange,
    handleSubmit,
  } = useAuthForm({
    initial: { name: "", email: "", password: "" },
    onSubmit: signup,
  });

  if (success) {
    return (
      <Message
        status="success"
        title="Account Created!"
        description="Check your email for a verification link"
        padding="40px 30px"
      >
        <AuthTabLink onClick={() => setTab("login")}>Back to login</AuthTabLink>
      </Message>
    );
  }

  return (
    <AuthForm
      onSubmit={() => handleSubmit(inputs.name, inputs.email, inputs.password)}
    >
      <AuthHeading>Create Account!</AuthHeading>
      <AuthName
        value={inputs.name}
        error={errors.name}
        onChange={handleChange}
      />
      <AuthEmail
        value={inputs.email}
        error={errors.email}
        onChange={handleChange}
      />
      <AuthPassword
        value={inputs.password}
        error={errors.password}
        onChange={handleChange}
      />
      <AuthButton loading={loading}>Sign up</AuthButton>
      <AuthTabLink onClick={() => setTab("login")}>
        Have an account?
      </AuthTabLink>
    </AuthForm>
  );
}

export default Signup;
