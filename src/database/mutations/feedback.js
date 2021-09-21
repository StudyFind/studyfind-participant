import { firestore } from "database/firebase";
import { getNow, getSide, getEmail } from "database/getters";

export const feedback = {
  submit: ({ title, body }) => {
    const time = getNow();
    const side = getSide();
    const email = getEmail();

    return firestore
      .collection("feedback")
      .add({ time, side, email, title, body });
  },
};
