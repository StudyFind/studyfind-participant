import { createContext, useEffect } from "react";
import { useHistory } from "hooks";

export const RedirectContext = createContext(null);

export const RedirectProvider = ({ children, cred }) => {
  const LOCAL_STORAGE_KEY = "redirect";

  const history = useHistory();

  const getRedirect = () => {
    localStorage.getItem(LOCAL_STORAGE_KEY);
  };

  const setRedirect = (path) => {
    localStorage.setItem(LOCAL_STORAGE_KEY, path);
  };

  const removeRedirect = () => {
    localStorage.removeItem(LOCAL_STORAGE_KEY);
  };

  const triggerRedirect = () => {
    const redirect = getRedirect();

    if (redirect) {
      history.push(redirect);
    }
  };

  useEffect(() => {
    const externalPaths = ["", "/", "/auth", "/team"];
    const currentPath = window.location.pathname;

    if (!cred && !externalPaths.includes(currentPath)) {
      setRedirect(currentPath);
    }
  }, [cred]);

  return (
    <RedirectContext.Provider value={{ setRedirect, triggerRedirect }}>
      {children}
    </RedirectContext.Provider>
  );
};
