import { forgotPassword } from "database/auth";
import { useAuthForm } from "hooks";

import { Message, EmailInput } from "components";
import { Auth } from "molecules";

function ForgotPassword({ setTab }) {
  const { input, loading, success, handleSubmit } = useAuthForm({
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
        <Auth.TabLink onClick={() => setTab("login")}>Back to login</Auth.TabLink>
      </Message>
    );
  }

  return (
    <Auth.Form onSubmit={handleSubmit}>
      <Auth.Heading>Forgot Password</Auth.Heading>
      <Auth.Input as={EmailInput} placeholder="Email" {...input("email")} />
      <Auth.Button loading={loading}>Send Password Reset Email</Auth.Button>
      <Auth.TabLink onClick={() => setTab("login")}>Back to login</Auth.TabLink>
    </Auth.Form>
  );
}

export default ForgotPassword;
