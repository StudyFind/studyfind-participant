import moment from "moment-timezone";
import { auth } from "database/firebase";

export const getNow = () => {
  return moment().utc().valueOf();
};

export const getUID = () => {
  return auth.currentUser?.uid;
};

export const getEmail = () => {
  return auth.currentUser?.email;
};

export const getName = () => {
  return auth.currentUser?.displayName;
};

export const getTimezone = () => {
  return moment.tz.guess();
};

export const getSide = () => {
  return "researcher";
};
