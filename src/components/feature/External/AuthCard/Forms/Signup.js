import { useContext } from "react";
import { useAuthForm } from "hooks";

import { AuthContext } from "context";

import {
  Link,
  Message,
  TextInput,
  EmailInput,
  PasswordInput,
} from "components";
import {
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthButton,
  AuthTabLink,
} from "components/feature/External/AuthCard/Blocks";

import { Text } from "@chakra-ui/react";

function Signup({ setTab }) {
  const { handleSignup } = useContext(AuthContext);

  const authForm = useAuthForm({
    initial: { name: "", email: "", password: "" },
    onSubmit: handleSignup,
  });

  if (authForm.success) {
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

  const links = {
    terms:
      "https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fterms-of-service.pdf?alt=media&token=fc3f4e63-3260-43f2-b838-61c562bbac9e",
    privacy:
      "https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fprivacy-policy.pdf?alt=media&token=1f6fa4be-b10a-4286-9bb0-92a1f992ad71",
  };

  const TERMS = (
    <Link to={links.terms} color="blue.500">
      terms of service
    </Link>
  );

  const PRIVACY = (
    <Link to={links.privacy} color="blue.500">
      privacy policy
    </Link>
  );

  return (
    <AuthForm onSubmit={authForm.submit}>
      <AuthHeading>Create Account!</AuthHeading>
      <AuthInput
        as={TextInput}
        name="name"
        placeholder="Name"
        value={authForm.values.name}
        error={authForm.errors.name}
        onChange={authForm.update}
      />
      <AuthInput
        as={EmailInput}
        name="email"
        placeholder="Email"
        value={authForm.values.email}
        error={authForm.errors.email}
        onChange={authForm.update}
      />
      <AuthInput
        as={PasswordInput}
        name="password"
        placeholder="Password"
        value={authForm.values.password}
        error={authForm.errors.password}
        onChange={authForm.update}
      />
      <AuthButton loading={authForm.loading}>Sign up</AuthButton>
      <Text color="gray.500" fontSize="xs" textAlign="center">
        By creating an account, you agree to our {TERMS} and {PRIVACY}
      </Text>
    </AuthForm>
  );
}

export default Signup;
