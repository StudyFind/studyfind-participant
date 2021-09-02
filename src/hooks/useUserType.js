import { useEffect, useState } from "react";

function useUserSide(auth) {
  const [type, setType] = useState("");

  const refreshUser = async () => {
    return auth.currentUser.getIdToken(true);
  };

  const getToken = async () => {
    return auth.currentUser.getIdTokenResult();
  };

  const handleSetType = async () => {
    await refreshUser();

    const token = getToken();
    const type = token?.claims?.usertype;

    setType(type || "");
  };

  useEffect(() => {
    handleSetType();
  }, []);

  return type;
}

export default useUserSide;
