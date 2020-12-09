import React, { useState } from "react";
import AuthView from "./AuthView";

function Auth() {
  const getDefaultTab = () => {
    const url = new URL(window.location.href);
    const mode = url.searchParams.get("mode");
    const accountExists = localStorage.getItem("exists") === "true";

    return mode || (accountExists ? "login" : "signup");
  };

  const [tab, setTab] = useState(getDefaultTab());

  return <AuthView tab={tab} setTab={setTab} />;
}

export default Auth;
