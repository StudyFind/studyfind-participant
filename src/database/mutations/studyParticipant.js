import { firestore } from "database/firebase";
import { customAlphabet } from "nanoid/non-secure";

const getStudyParticipantRef = (studyID, participantID) => {
  return firestore
    .collection("studies")
    .doc(studyID)
    .collection("participants")
    .doc(participantID);
};

const createStudyParticipant = async (
  studyID,
  participantID,
  { timezone, responses }
) => {
  const nanoid = customAlphabet("0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ", 10);

  await firestore
    .collection("participants")
    .doc(participantID)
    .update({ enrolled: user.enrolled.concat(studyID) });

  return getStudyParticipantRef(studyID, participantID).set({
    fakename: nanoid(),
    timezone,
    responses,
    status: "interested",
  });
};

export const studyParticipant = {
  createStudyParticipant,
};
