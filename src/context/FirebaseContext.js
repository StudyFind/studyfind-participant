import { createContext } from "react";
import firebase from "firebase/app";

export const FirebaseContext = createContext(null);

export const FirebaseProvider = ({ children, config }) => {
  const app = firebase.initializeApp(config);

  const auth = app.auth();
  const storage = app.storage();
  const firestore = app.firestore();
  const functions = app.functions();

  return (
    <FirebaseContext.Provider value={{ auth, storage, firestore, functions }}>
      {children}
    </FirebaseContext.Provider>
  );
};
