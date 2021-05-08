import React from "react";

import { useAuthForm } from "hooks";
import { resetPassword } from "database/auth";

import {
  AuthForm,
  AuthHeading,
  AuthPassword,
  AuthButton,
  AuthTabLink,
} from "views/External/Auth/Blocks";
import { Message } from "components";

function ResetPassword({ setTab }) {
  const url = new URL(window.location.href);
  const actionCode = url.searchParams.get("oobCode");

  const { inputs, errors, success, loading, handleChange, handleSubmit } = useAuthForm({
    initial: { password: "" },
    onSubmit: resetPassword,
  });

  if (success) {
    return (
      <Message
        type="success"
        title="Password Reset!"
        description="You can now use your new password to log in"
        padding="40px 30px"
      >
        <AuthTabLink onClick={() => setTab("login")}> Back to login </AuthTabLink>
      </Message>
    );
  }

  return (
    <AuthForm onSubmit={() => handleSubmit(actionCode, inputs.password)}>
      <AuthHeading>Reset Password</AuthHeading>
      <AuthPassword value={inputs.password} error={errors.password} onChange={handleChange} />
      <AuthButton loading={loading}>Confirm Reset Password</AuthButton>
      <AuthTabLink onClick={() => setTab("login")}>Back to login</AuthTabLink>
    </AuthForm>
  );
}

export default ResetPassword;
