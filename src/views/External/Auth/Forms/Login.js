import React from "react";

import { useAuthForm } from "hooks";
import { signin } from "database/auth";

import {
  AuthForm,
  AuthHeading,
  AuthEmail,
  AuthPassword,
  AuthButton,
  AuthTabLink,
} from "views/External/Auth/Blocks";

function Login({ setTab }) {
  const { inputs, errors, loading, handleChange, handleSubmit } = useAuthForm({
    initial: { email: "", password: "" },
    onSubmit: signin,
  });

  return (
    <AuthForm onSubmit={() => handleSubmit(inputs.email, inputs.password)}>
      <AuthHeading>Welcome Back!</AuthHeading>
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
      <AuthButton loading={loading}>Login</AuthButton>
      <AuthTabLink onClick={() => setTab("forgotPassword")}>
        Forgot Password?
      </AuthTabLink>
    </AuthForm>
  );
}

export default Login;
