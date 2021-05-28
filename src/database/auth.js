import { auth, firestore } from "./firebase";
import moment from "moment-timezone";
import errors from "./errors";
import { setParticipantClaim } from "./cloud";

const getErrorMessage = ({ code }) => ({
  email: "",
  password: "",
  ...errors[code],
});

const forgotPassword = async (email) => auth.sendPasswordResetEmail(email);

const signup = async (name, email, password) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);

    await Promise.all([
      setParticipantClaim(),
      user.sendEmailVerification(),
      firestore
        .collection("participants")
        .doc(user.uid)
        .set({
          name,
          timezone: moment.tz.guess(),
          sex: "",
          birthdate: "",
          preferences: {
            location: {},
            notifications: {
              email: false,
              phone: false,
              categories: {
                account: true,
                status: true, // changes to study status
                reminders: true,
                meetings: true,
                messages: true,
              },
            },
            timezone: {
              autodetect: true,
            },
          },
          availability: "",
          enrolled: [],
          saved: [],
          filter: {
            control_no: false,
            control_yes: false,
            enrolled: false,
            interventional: false,
            observational: false,
            saved: false,
          },
          location: {},
        }),
    ]);

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
