import { auth, firestore } from "./firebase";
import errors from "./errors";

const getErrorMessage = ({ code }) => ({ email: "", password: "", ...errors[code] });

const forgotPassword = async (email) => auth.sendPasswordResetEmail(email);

const signup = async (name, email, password) => {
  const defaultUser = {
    filter: {
        control_no: "",
        control_yes: "",
        saved: "",
        observational: "",
        interventional: "",
        enrolled: ""
    },
    personal_info: {
        birthdate: new Date().toLocaleString().split(",")[0],
        sex: "",
        availability: "",
        name: name
    },
    enrolled: [],
    saved: []
  }
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    await firestore.collection("participants").doc(user.uid).set(defaultUser);
    localStorage.setItem("exists", true);
    return user;
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const signin = async (email, password) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    localStorage.setItem("exists", true);
    return user;
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const signout = async () => auth.signOut();

const deleteUser = async (email, password) => {
  auth
    .signInWithEmailAndPassword(email, password)
    .then(({ user }) => {
      user.delete();
      localStorage.setItem("exists", false);
    })
    .catch(getErrorMessage);
};

// ========================== PASSWORD UPDATES ========================== //

const resetPassword = async (actionCode, password) => {
  try {
    const email = await auth.verifyPasswordResetCode(actionCode);
    await auth.confirmPasswordReset(actionCode, password);
    return signin(email, password);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const changePassword = async (password, newPassword) => {
  try {
    const { email } = await auth.currentUser;
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    return user.updatePassword(newPassword);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

export {
  // DATA //
  deleteUser,
  forgotPassword,
  resetPassword,
  changePassword,
  // AUTH //
  signin,
  signup,
  signout,
};
