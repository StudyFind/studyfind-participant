import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "database/firebase";
import { BrowserRouter } from "react-router-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import Loading from "./Loading";
import ParticipantSide from "pages/Internal/ParticipantRoutes";
import External from "pages/External/External";

const theme = extendTheme({
  config: {
    useSystemColorMode: false,
    initialColorMode: "light",
  },
});

function App() {
  const [cred, loading] = useAuthState(auth);

  // useEffect(() => {
  //   const externalPaths = ["", "/", "/auth", "/team"];
  //   const currentPath = window.location.pathname;

  //   localStorage.removeItem("redirect");

  //   if (!cred && !externalPaths.includes(currentPath)) {
  //     localStorage.setItem("redirect", currentPath);
  //   }
  //   // console.log(process.env.REACT_APP_URL);
  // }, [cred]);

  return (
    <ChakraProvider theme={theme}>
      {loading ? (
        <Loading />
      ) : (
        <BrowserRouter>
          {window.location.host.split(".")[0] === "participant" ? <ParticipantSide /> : <External />}
        </BrowserRouter>
      )}
    </ChakraProvider>
  );
}

export default App;
