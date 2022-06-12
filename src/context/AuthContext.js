import { createContext } from "react";
import { signin, signup, forgotPassword } from "database/auth";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => (
  <AuthContext.Provider
    value={{
      handleLogin: signin,
      handleSignup: signup,
      handleForgotPassword: forgotPassword,
    }}
  >
    {children}
  </AuthContext.Provider>
);
