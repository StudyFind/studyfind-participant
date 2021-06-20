import Login from "./Forms/Login";
import Signup from "./Forms/Signup";
import ForgotPassword from "./Forms/ForgotPassword";

function AuthForm({ tab, setTab }) {
  return {
    login: <Login setTab={setTab} />,
    signup: <Signup setTab={setTab} />,
    forgotPassword: <ForgotPassword setTab={setTab} />,
  }[tab];
}

export default AuthForm;
