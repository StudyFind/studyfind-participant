import { firestore } from "database/firebase";

export const notification = {
  read: (participantID, notificationID) => {
    return firestore
      .collection("participants")
      .doc(participantID)
      .collection("notifications")
      .doc(notificationID)
      .update({ read: true });
  },
};
