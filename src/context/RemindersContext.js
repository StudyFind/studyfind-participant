import { auth, firestore } from "database/firebase";

function RemindersContext({ studyID, participantID }) {
  const researcherID = auth.currentUser.uid;

  const remindersRef = firestore.collection("reminders");

  const remindersQuery = remindersRef
    .where("studyID", "==", studyID)
    .where("researcherID", "==", researcherID)
    .where("participantID", "==", participantID);

  const createReminder = ({ title, times, startDate, endDate }) => {
    remindersRef.add({
      title,
      times,
      startDate,
      endDate,
      studyID,
      researcherID,
      participantID,
      confirmedByParticipant: false,
    });
  };

  const updateReminder = (reminderID, { title, times, startDate, endDate }) => {
    remindersRef.doc(reminderID).update({ title, times, startDate, endDate });
  };

  const deleteReminder = (reminderID) => {
    remindersRef.doc(reminderID).delete();
  };
}
