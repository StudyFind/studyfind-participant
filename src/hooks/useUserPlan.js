import { useEffect, useState } from "react";

function useUserPlan(auth) {
  const [plan, setPlan] = useState();

  const refreshUser = async () => {
    return auth.currentUser.getIdToken(true);
  };

  const getToken = async () => {
    return auth.currentUser.getIdTokenResult();
  };

  const handleSetPlan = async () => {
    await refreshUser();

    const token = getToken();
    const role = token?.claims?.stripeRole;

    setPlan(role || "basic");
  };

  useEffect(() => {
    handleSetPlan();
  }, []);

  return plan;
}

export default useUserPlan;
