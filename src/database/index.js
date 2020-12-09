import { auth, database, googleAuthProvider, facebookAuthProvider } from "./firebase";
import { errors } from "./constants";

// === AUTH === //

// ========================== HANDLE API ERRORS ========================== //
const getError = ({ code }) => ({ email: "", password: "", ...errors[code] });

// ========================== HANDLE SIGN UP ========================== //
// 1. Create Firebase Auth User
// 2. Set User Type (displayName is used to store user type)
// 3. Add User Data Ref to Realtime Database
// 4. Send Verification Email

const createUserAuth = async (email, password) =>
  auth.createUserWithEmailAndPassword(email, password);
const deleteUserAuth = (user) => user.delete();
const updateUser = async (uid, data) => database.ref(`users/${uid}`).update(data);

const createCookie = () => localStorage.setItem("exists", true);
const deleteCookie = () => localStorage.setItem("exists", false);

const setUserData = ({ uid }) => database.ref(`users/${uid}`).set({});
const setUserType = (user) => user.updateProfile({ displayName: "researcher" });

const sendVerificationEmail = (user) => user.sendEmailVerification();
const sendPasswordResetEmail = async (email) => auth.sendPasswordResetEmail(email);

const signup = async (email, password) => {
  try {
    const { user } = await createUserAuth(email, password);
    createCookie();
    setUserType(user);
    setUserData(user);
    sendVerificationEmail(user);
    return user;
  } catch (error) {
    throw getError(error);
  }
};

// ========================== HANDLE SIGN IN ========================== //
const authenticateUser = async (email, password) =>
  auth.signInWithEmailAndPassword(email, password);

function checkVerified(user) {
  if (!user.emailVerified) {
    sendVerificationEmail(user);
    throw { code: "auth/user-not-verified" };
  }
}

function checkUserType(user) {
  if (user.displayName !== "researcher") {
    throw { code: "auth/user-not-found" };
  }
}

const signin = async (email, password) => {
  try {
    const { user } = await authenticateUser(email, password);
    createCookie();
    checkUserType(user);
    checkVerified(user);
    return user;
  } catch (error) {
    throw getError(error);
  }
};

// ========================== HANDLE SIGN OUT ========================== //
const googleAuth = async () => {
  return await auth
    .signInWithPopup(googleAuthProvider)
    .then((resp) => {
      createCookie();
      if (resp.additionalUserInfo.isNewUser) {
        setUserType(resp.user);
        setUserData(resp.user);
      }
      return resp;
    })
    .catch((err) => {
      throw err.message;
    });
};

const facebookAuth = async () => {
  return await auth
    .signInWithPopup(facebookAuthProvider)
    .then((resp) => {
      createCookie();
      if (resp.additionalUserInfo.isNewUser) {
        setUserType(resp.user);
        setUserData(resp.user);
      }
      return resp;
    })
    .catch((err) => {
      throw err.message;
    });
};

// ========================== HANDLE SIGN OUT ========================== //
const signout = async () => auth.signOut();

// ========================== EMAIL VERIFICATION ========================== //

const verifyUser = async (actionCode) => auth.applyActionCode(actionCode);

// ========================== ACCOUNT DELETION ========================== //

const deleteUser = async (email, password) => {
  try {
    const { user } = await authenticateUser(email, password);
    await deleteUserAuth(user);
    deleteCookie();
  } catch (error) {
    throw getError(error);
  }
};

// ========================== PASSWORD UPDATES ========================== //

const resetPassword = async (actionCode, password) => {
  try {
    const email = await auth.verifyPasswordResetCode(actionCode);
    await auth.confirmPasswordReset(actionCode, password);
    return signin(email, password);
  } catch (error) {
    throw getError(error);
  }
};

const changePassword = async (password, newPassword) => {
  try {
    const { email } = await auth.currentUser;
    const { user } = await authenticateUser(email, password);
    return user.updatePassword(newPassword);
  } catch (error) {
    throw getError(error);
  }
};

export {
  // DATA //
  verifyUser,
  updateUser,
  deleteUser,
  resetPassword,
  changePassword,
  googleAuth,
  facebookAuth,
  // AUTH //
  signin,
  signup,
  signout,
  sendVerificationEmail,
  sendPasswordResetEmail,
};
