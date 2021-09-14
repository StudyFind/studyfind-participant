import { firestore } from "database/firebase";
import { getSide } from "database/getters";

const side = getSide();

export const notification = {
  read: (uid, notificationID) => {
    return firestore
      .collection(`${side}s`)
      .doc(uid)
      .collection("notifications")
      .doc(notificationID)
      .update({ read: true });
  },
};
