// export { default as UserContext } from "./UserContext";
export { default as StudiesContext } from "./StudiesContext";
// export { default as ConfirmContext } from "./ConfirmContext";

import { createContext } from "react";

export const AuthContext = createContext(null);
export const UserContext = createContext(null);
export const ConfirmContext = createContext(null);
