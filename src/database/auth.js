import { participant, researcher } from "database/mutations";
import { getSide, getEmail } from "database/getters";
import { auth } from "database/firebase";
import errors from "database/errors";

const side = getSide();
const mutator = { participant, researcher }[side];

const getErrorMessage = ({ code }) => {
  return { email: "", password: "", ...errors[code] };
};

const setLocalUserExists = (value) => {
  localStorage.setItem("exists", value);
};

const initialize = async ({ email, password }) => {
  const { user } = await auth.createUserWithEmailAndPassword(email, password);
  return user;
};

const authenticate = async ({ email, password }) => {
  const { user } = await auth.signInWithEmailAndPassword(email, password);
  return user;
};

export const signup = async ({ name, email, password }) => {
  try {
    const user = await initialize({ email, password });

    await Promise.all([
      user.sendEmailVerification(),
      user.updateProfile({ displayName: name }),
      mutator.create(user.uid),
    ]);

    setLocalUserExists(true);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

export const signin = async ({ email, password }) => {
  try {
    await authenticate({ email, password });
    setLocalUserExists(true);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

export const signout = async () => {
  return auth.signOut();
};

export const forgotPassword = async ({ email }) => {
  try {
    await auth.sendPasswordResetEmail(email);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

export const changePassword = async ({ password, newPassword }) => {
  try {
    const email = getEmail();
    const user = await authenticate({ email, password });
    await user.updatePassword(newPassword);
  } catch (error) {
    throw getErrorMessage(error);
  }
};

export const deleteAccount = async ({ email, password }) => {
  try {
    const user = await authenticate({ email, password });
    await mutator.delete(user.uid);
    await user.delete();
    setLocalUserExists(false);
  } catch (error) {
    throw getErrorMessage(error);
  }
};
