import AuthCard from "components/feature/External/AuthCard/AuthCard";
import { AuthProvider } from "../../../context/AuthContext";

function Auth() {
  return (
    <AuthProvider>
      <AuthCard />
    </AuthProvider>
  );
}

export default Auth;
