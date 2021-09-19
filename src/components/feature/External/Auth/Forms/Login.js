import { useContext } from "react";
import { useAuthForm } from "hooks";

import { AuthContext } from "../AuthContext";

import { EmailInput, PasswordInput } from "@studyfind/components";
import {
  AuthForm,
  AuthHeading,
  AuthInput,
  AuthButton,
  AuthTabLink,
} from "../Blocks";

function Login({ setTab }) {
  const { handleLogin } = useContext(AuthContext);

  const authForm = useAuthForm({
    initial: { email: "", password: "" },
    onSubmit: handleLogin,
  });

  return (
    <AuthForm onSubmit={authForm.submit}>
      <AuthHeading>Welcome Back!</AuthHeading>
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
      <AuthButton loading={authForm.loading}>Login</AuthButton>
      <AuthTabLink onClick={() => setTab("forgotPassword")}>
        Forgot Password?
      </AuthTabLink>
    </AuthForm>
  );
}

export default Login;
