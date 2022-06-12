import { firestore } from "database/firebase";
import { getUID } from "database/getters";

const remindersRef = firestore.collection("reminders");

export const reminder = {
  create: ({ title, times, startDate, endDate, participantID, studyID }) =>
    remindersRef.add({
      title,
      times,
      startDate,
      endDate,
      studyID,
      participantID,
      researcherID: getUID(),
      confirmedByParticipant: false,
    }),

  update: (reminderID, { title, times, startDate, endDate }) =>
    remindersRef.doc(reminderID).update({
      title,
      times,
      startDate,
      endDate,
    }),

  confirm: (reminderID) =>
    remindersRef.doc(reminderID).update({
      confirmedByParticipant: true,
    }),

  delete: (reminderID) => remindersRef.doc(reminderID).delete(),
};
