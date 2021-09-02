import { firestore } from "database/firebase";

export const buildResearcherQuery = (researcherID) => {
  return firestore.collection("researchers").doc(researcherID);
};

export const buildDashboardQuery = (researcherID) => {
  return firestore
    .collection("studies")
    .where("researcher.id", "==", researcherID)
    .orderBy("createdAt", "desc");
};

export const buildNotificationsQuery = (researcherID) => {
  return firestore
    .collection("studies")
    .where("researcher.id", "==", researcherID)
    .orderBy("createdAt", "desc");
};

export const buildParticipantsQuery = (researcherID) => {
  return firestore
    .collection("studies")
    .where("researcher.id", "==", researcherID)
    .orderBy("createdAt", "desc");
};

export const buildMessagesQuery = (researcherID) => {
  return firestore
    .collection("studies")
    .where("researcher.id", "==", researcherID)
    .orderBy("createdAt", "desc");
};

export const buildMeetingsQuery = (researcherID) => {
  return firestore
    .collection("studies")
    .where("researcher.id", "==", researcherID)
    .orderBy("createdAt", "desc");
};

export const buildRemindersQuery = (researcherID) => {
  return firestore
    .collection("studies")
    .where("researcher.id", "==", researcherID)
    .orderBy("createdAt", "desc");
};
