import { firestore } from "database/firebase";

const meetingsRef = firestore.collection("meetings");

export const meeting = {
  confirm: (meetingID) =>
    meetingsRef.doc(meetingID).update({ confirmedByParticipant: true }),
};
