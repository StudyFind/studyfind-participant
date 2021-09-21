import { firestore } from "database/firebase";
import { getUID } from "database/getters";

const meetingsRef = firestore.collection("meetings");

export const meeting = {
  create: ({ name, link, time, participantID, studyID }) =>
    meetingsRef.add({
      name,
      link,
      time,
      studyID,
      participantID,
      researcherID: getUID(),
      confirmedByParticipant: false,
    }),

  update: (meetingID, { name, link, time }) =>
    meetingsRef.doc(meetingID).update({
      name,
      link,
      time,
    }),

  confirm: (meetingID) =>
    meetingsRef.doc(meetingID).update({
      confirmedByParticipant: true,
    }),

  delete: (meetingID) => meetingsRef.doc(meetingID).delete(),
};
