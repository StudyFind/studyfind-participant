import moment from "moment";
import { auth, firestore } from "database/firebase";

function ParticipantsContext({ studyID, date }) {
  const researcherID = auth.currentUser.uid;

  const participantsRef = firestore.collection("studies").doc(studyID).collection("participants");

  // const participantsQuery = participantsRef.where("status", "in", filters.status);
}
