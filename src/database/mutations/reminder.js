import { firestore } from "database/firebase";

const remindersRef = firestore.collection("reminders");

export const reminder = {
  confirm: (reminderID) =>
    remindersRef.doc(reminderID).update({ confirmedByParticipant: true }),
};
