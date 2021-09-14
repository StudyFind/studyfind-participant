import { createContext } from "react";

export { AuthContext, AuthProvider } from "./AuthContext";
// export { RedirectContext, RedirectProvider } from "./RedirectContext";
// export { FirebaseContext, FirebaseProvider } from "./FirebaseContext";

export const UserContext = createContext(null);
export const ConfirmContext = createContext(null);
