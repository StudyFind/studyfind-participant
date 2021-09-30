import firebase from "firebase";

import { firestore } from "database/firebase";
import { getTimezone } from "database/getters";

const participantRef = (uid) => firestore.collection("participants").doc(uid);

export const participant = {
  create: (uid) =>
    participantRef(uid).set({
      sex: "",
      birthdate: "",
      availability: "",
      phone: "",
      enrolled: [],
      saved: [],
      timezone: {
        region: getTimezone(),
        autodetect: true,
      },
      location: {
        address: "",
        coordinates: {
          latitude: 0,
          longitude: 0,
        },
      },
      notifications: {
        local: true,
        email: false,
        phone: false,
      },
    }),

  update: (uid, updatedData) => participantRef(uid).update(updatedData),

  appendStudyToEnrolled: (uid, studyID) =>
    participantRef(uid).update({
      enrolled: firebase.firestore.FieldValue.arrayUnion(studyID),
    }),

  appendStudyToSaved: (uid, studyID) =>
    participantRef(uid).update({
      saved: firebase.firestore.FieldValue.arrayUnion(studyID),
    }),

  removeStudyFromSaved: (uid, studyID) =>
    participantRef(uid).update({
      saved: firebase.firestore.FieldValue.arrayRemove(studyID),
    }),

  delete: (uid) => participantRef(uid).delete(),
};
