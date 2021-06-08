import { signin } from "database/auth";
import { useAuthForm } from "hooks";
import { EmailInput, PasswordInput } from "components";
import { Auth } from "molecules";

function Login({ setTab }) {
  const { input, loading, handleSubmit } = useAuthForm({
    initial: { email: "", password: "" },
    onSubmit: signin,
  });

  return (
    <Auth.Form onSubmit={handleSubmit}>
      <Auth.Heading>Welcome Back!</Auth.Heading>
      <Auth.Input as={EmailInput} placeholder="Email" {...input("email")} />
      <Auth.Input as={PasswordInput} placeholder="Password" {...input("password")} />
      <Auth.Button loading={loading}>Login</Auth.Button>
      <Auth.TabLink onClick={() => setTab("forgotPassword")}>Forgot Password?</Auth.TabLink>
    </Auth.Form>
  );
}

export default Login;
