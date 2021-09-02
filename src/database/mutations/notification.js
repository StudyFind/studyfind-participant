import { firestore } from "database/firebase";

export const notification = {
  read: (researcherID, notificationID) => {
    return firestore
      .collection("researchers")
      .doc(researcherID)
      .collection("notifications")
      .doc(notificationID)
      .update({ read: true });
  },
};
