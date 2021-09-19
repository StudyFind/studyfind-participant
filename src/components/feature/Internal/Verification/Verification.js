import { useState } from "react";

import VerificationWarning from "./VerificationWarning";
import VerificationSuccess from "./VerificationSuccess";
import VerificationFailure from "./VerificationFailure";

function Verification() {
  const [state, setState] = useState("warning");

  return {
    warning: <VerificationWarning setState={setState} />,
    success: <VerificationSuccess />,
    failure: <VerificationFailure />,
  }[state];
}

export default Verification;
