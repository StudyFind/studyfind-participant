import React, { useState } from "react";

import { auth } from "database/firebase";

import VerificationWarning from "./VerificationWarning";
import VerificationSuccess from "./VerificationSuccess";
import VerificationFailure from "./VerificationFailure";

function Verification({ email }) {
  const [state, setState] = useState("warning");
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    auth.currentUser
      .sendEmailVerification()
      .then(() => setState("success"))
      .catch(() => setState("failure"))
      .finally(() => setLoading(false));
  };

  const states = {
    warning: <VerificationWarning email={email} loading={loading} handleClick={handleClick} />,
    success: <VerificationSuccess email={email} />,
    failure: <VerificationFailure />,
  };

  return states[state];
}

export default Verification;
