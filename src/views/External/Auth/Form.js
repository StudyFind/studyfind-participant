import React from "react";

import Login from "./Forms/Login";
import Signup from "./Forms/Signup";
import ForgotPassword from "./Forms/ForgotPassword";
import ResetPassword from "./Forms/ResetPassword";

function Form({ tab, setTab }) {
  return {
    login: <Login setTab={setTab} />,
    signup: <Signup setTab={setTab} />,
    forgotPassword: <ForgotPassword setTab={setTab} />,
    resetPassword: <ResetPassword setTab={setTab} />,
  }[tab];
}

export default Form;
