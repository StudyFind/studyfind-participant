import { useState } from "react";

import { auth } from "database/firebase";

import VerificationPending from "components/feature/EmailVerificationBanner/VerificationPending";
import VerificationSuccess from "components/feature/EmailVerificationBanner/VerificationSuccess";
import VerificationFailure from "components/feature/EmailVerificationBanner/VerificationFailure";

function Verification() {
  const [state, setState] = useState("pending");
  const [loading, setLoading] = useState(false);

  const { email, sendEmailVerification } = auth.currentUser;

  const handleSendVerificationEmail = () => {
    setLoading(true);
    sendEmailVerification()
      .then(() => setState("success"))
      .catch(() => setState("failure"))
      .finally(() => setLoading(false));
  };

  return {
    pending: (
      <VerificationPending
        email={email}
        loading={loading}
        handleSendVerificationEmail={handleSendVerificationEmail}
      />
    ),
    success: <VerificationSuccess email={email} />,
    failure: <VerificationFailure />,
  }[state];
}

export default Verification;
