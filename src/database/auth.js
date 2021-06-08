import { auth, firestore } from "database/firebase";

import errors from "database/errors";
import moment from "moment-timezone";

const getErrorMessage = ({ code }) => {
  return { email: "", password: "", ...errors[code] };
};

const setLocalUserExists = (value) => {
  localStorage.setItem("exists", value);
};

const signup = async ({ name, email, password }) => {
  try {
    const { user } = await auth.createUserWithEmailAndPassword(email, password);
    const timezone = moment.tz.guess();

    await Promise.all([
      user.sendEmailVerification(),
      firestore
        .collection("participants")
        .doc(user.uid)
        .set({
          name,
          timezone,
          sex: "",
          birthdate: "",
          availability: "",
          location: {},
          enrolled: [],
          saved: [],
          preferences: {
            timezone: {
              autodetect: true,
            },
            location: {
              autodetect: true,
            },
            notifications: {
              email: false,
              phone: false,
              toast: false,
              categories: {
                account: true,
                status: true, // changes to study status
                reminders: true,
                meetings: true,
                messages: true,
              },
            },
          },
        }),
    ]);

    setLocalUserExists(true);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const signin = async ({ email, password }) => {
  try {
    await auth.signInWithEmailAndPassword(email, password);
    setLocalUserExists(true);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const signout = async () => {
  return auth.signOut();
};

const forgotPassword = async ({ email }) => {
  try {
    auth.sendPasswordResetEmail(email);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const changePassword = async ({ password, newPassword }) => {
  try {
    const { email } = auth.currentUser;
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    await user.updatePassword(newPassword);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

const deleteAccount = async ({ email, password }) => {
  try {
    const { user } = await auth.signInWithEmailAndPassword(email, password);
    await firestore.collection("researchers").doc(user.uid).delete();
    await user.delete();
    setLocalUserExists(false);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

export { signin, signup, signout, forgotPassword, changePassword, deleteAccount };
