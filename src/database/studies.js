import { firestore } from "./firebase";

const map = (snapshot) => {
  const collection = [];
  snapshot.forEach((doc) => collection.push({ id: doc.id, ...doc.data() }));
  return collection;
};

const fetchStudy = async (nctID) => {
  const document = await firestore.collection("studies").doc(nctID).get();
  return { id: document.id, ...document.data() };
};

const fetchStudies = async () => {
  const snapshot = await firestore.collection("studies").where("published", "==", true).get();
  return map(snapshot);
};

export { fetchStudy, fetchStudies };
