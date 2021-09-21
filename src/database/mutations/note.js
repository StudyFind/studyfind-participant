import { firestore } from "database/firebase";
import { getNow } from "database/getters";

const getNotesRef = (studyID, participantID) => {
  return firestore
    .collection("studies")
    .doc(studyID)
    .collection("participants")
    .doc(participantID)
    .collection("messages");
};

const getNoteRef = (studyID, participantID, noteID) => {
  return getNotesRef(studyID, participantID).doc(noteID);
};

export const note = {
  create: (studyID, participantID, { title, body }) =>
    getNotesRef(studyID, participantID).add({ title, body, time: getNow() }),

  update: (studyID, participantID, noteID, { title, body }) =>
    getNotesRef(studyID, participantID, noteID).update({ title, body }),

  delete: (studyID, participantID, noteID) =>
    getNoteRef(studyID, participantID, noteID).delete(),
};
