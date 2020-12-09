import { firestore } from "./firebase";

const map = (snapshot) => {
  const collection = [];
  snapshot.forEach((doc) => collection.push({ id: doc.id, ...doc.data() }));
  return collection;
};

const fetchParticipant = async (nctID, userID) => {
  const document = await firestore
    .collection("studies")
    .doc(nctID)
    .collection("participants")
    .doc(userID)
    .get();
  return { id: document.id, ...document.data() };
};

const fetchParticipants = async (nctID) => {
  const snapshot = await firestore
    .collection("studies")
    .doc(nctID)
    .collection("participants")
    .get();

  return map(snapshot);
};

export { fetchParticipant, fetchParticipants };
