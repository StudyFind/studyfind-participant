import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import { auth } from "database/firebase";

import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Link } from "@studyfind/components";

import Loading from "./Loading";
// import External from "pages/External/External";
// import Internal from "pages/Internal/Internal";

const theme = extendTheme({
  config: {
    useSystemColorMode: true,
    initialColorMode: "dark",
  },
});

function App() {
  const [cred, loading] = useAuthState(auth);

  useEffect(() => {
    const externalPaths = ["", "/", "/auth", "/team"];
    const currentPath = window.location.pathname;

    localStorage.removeItem("redirect");

    if (!cred && !externalPaths.includes(currentPath)) {
      localStorage.setItem("redirect", currentPath);
    }
  }, [cred]);

  // return <div>HELLO</div>;

  return (
    <BrowserRouter>
      <ChakraProvider theme={theme}></ChakraProvider>
    </BrowserRouter>
  );
}

export default App;
