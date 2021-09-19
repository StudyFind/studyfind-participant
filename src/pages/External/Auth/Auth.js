import AuthCard from "components/feature/External/Auth/AuthCard";
import { signin, signup, forgotPassword } from "database/auth";

function Auth() {
  return (
    <AuthCard
      handleSignup={signup}
      handleLogin={signin}
      handleForgotPassword={forgotPassword}
    />
  );
}

export default Auth;
