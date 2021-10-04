import { useContext } from "react";
import { useAuthForm } from "hooks";
import { AuthContext } from "context";

import { Message, EmailInput } from "components";
import {
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthButton,
  AuthTabLink,
} from "components/feature/External/AuthCard/Blocks";

function ForgotPassword({ setTab }) {
  const { handleForgotPassword } = useContext(AuthContext);

  const authForm = useAuthForm({
    initial: { email: "" },
    onSubmit: handleForgotPassword,
  });

  if (authForm.success) {
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
    <AuthForm onSubmit={authForm.submit}>
      <AuthHeading>Forgot Password</AuthHeading>
      <AuthInput
        as={EmailInput}
        name="email"
        placeholder="Email"
        value={authForm.values.email}
        error={authForm.errors.email}
        onChange={authForm.update}
      />
      <AuthButton loading={authForm.loading}>
        Send Password Reset Email
      </AuthButton>
      <AuthTabLink onClick={() => setTab("login")}>Back to login</AuthTabLink>
    </AuthForm>
  );
}

export default ForgotPassword;
