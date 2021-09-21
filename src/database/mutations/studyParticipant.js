import { firestore } from "database/firebase";

const getStudyParticipantRef = (studyID, participantID) => {
  return firestore.collection("studies").doc(studyID).collection("participants").doc(participantID);
};

const updateParticipantStatus = (studyID, participantID, { status }) => {
  return getStudyParticipantRef(studyID, participantID).update({ status });
};

export const studyParticipant = {
  updateStatus: updateParticipantStatus,
};
