import { firestore } from "database/firebase";
import { getNow, getSide } from "database/getters";

export const mailing = {
  subscribe: ({ email }) => {
    const time = getNow();
    const side = getSide();

    return firestore.collection("mailing").add({ time, side, email });
  },
};
