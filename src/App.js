import React, { useState, useEffect } from "react";

import { auth } from "database/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { signout } from "database";

import Loading from "./Loading";
import External from "views/External/External";
import Internal from "views/Internal/Internal";

function App() {
  const [cred, loading] = useAuthState(auth);
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    if (!loading) {
      if (cred) {
        if (cred.emailVerified && cred.displayName === "researcher") {
          setIsLoggedIn(true);
          return;
        } else {
          signout();
        }
      }
      setIsLoggedIn(false);
    }
  }, [cred, loading]);

  return loading || isLoggedIn === null ? <Loading /> : isLoggedIn ? <Internal /> : <External />;
}

export default App;
