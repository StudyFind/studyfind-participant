import { auth } from "database/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

import Loading from "./Loading";
import External from "pages/External/External";
import Internal from "pages/Internal/Internal";

function App() {
  const [cred, loading] = useAuthState(auth);
  return loading ? <Loading /> : cred ? <Internal /> : <External />;
}

export default App;
