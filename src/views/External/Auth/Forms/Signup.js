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

import { Link, Message } from "components";
import { Text } from "@chakra-ui/react";

function Signup({ setTab }) {
  const { inputs, errors, success, loading, handleChange, handleSubmit } = useAuthForm({
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
    <AuthForm onSubmit={() => handleSubmit(inputs.name, inputs.email, inputs.password)}>
      <AuthHeading>Create Account!</AuthHeading>
      <AuthName value={inputs.name} error={errors.name} onChange={handleChange} />
      <AuthEmail value={inputs.email} error={errors.email} onChange={handleChange} />
      <AuthPassword value={inputs.password} error={errors.password} onChange={handleChange} />
      <AuthButton loading={loading}>Sign up</AuthButton>
      <Text color="gray.500" fontSize="xs" textAlign="center">
        By creating an account, you agree to our{" "}
        <Link
          to="https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fterms-of-service.pdf?alt=media&token=fc3f4e63-3260-43f2-b838-61c562bbac9e"
          color="blue.500"
        >
          terms of service
        </Link>{" "}
        and{" "}
        <Link
          to="https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fprivacy-policy.pdf?alt=media&token=6781ff6a-c100-44f9-833b-f669afed0c47"
          color="blue.500"
        >
          privacy policy
        </Link>
      </Text>
    </AuthForm>
  );
}

export default Signup;
