import { signup } from "database/auth";
import { useAuthForm } from "hooks";

import { Text } from "@chakra-ui/react";
import { Link, Message, TextInput, EmailInput, PasswordInput } from "components";
import { Auth } from "molecules";

function Signup({ setTab }) {
  const { input, loading, success, handleSubmit } = useAuthForm({
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
        <Auth.TabLink onClick={() => setTab("login")}>Back to login</Auth.TabLink>
      </Message>
    );
  }

  const links = {
    terms:
      "https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fterms-of-service.pdf?alt=media&token=fc3f4e63-3260-43f2-b838-61c562bbac9e",
    privacy:
      "https://firebasestorage.googleapis.com/v0/b/studyfind-researcher.appspot.com/o/legal%2Fprivacy-policy.pdf?alt=media&token=6781ff6a-c100-44f9-833b-f669afed0c47",
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
    <Auth.Form onSubmit={handleSubmit}>
      <Auth.Heading>Create Account!</Auth.Heading>
      <Auth.Input as={TextInput} placeholder="Name" {...input("name")} />
      <Auth.Input as={EmailInput} placeholder="Email" {...input("email")} />
      <Auth.Input as={PasswordInput} placeholder="Password" {...input("password")} />
      <Auth.Button loading={loading}>Sign up</Auth.Button>
      <Text color="gray.500" fontSize="xs" textAlign="center">
        By creating an account, you agree to our {TERMS} and {PRIVACY}
      </Text>
    </Auth.Form>
  );
}

export default Signup;
