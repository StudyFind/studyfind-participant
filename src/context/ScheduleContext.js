import moment from "moment";
import { auth, firestore } from "database/firebase";

function ScheduleContext({ date }) {
  const researcherID = auth.currentUser.uid;

  const scheduleRef = firestore.collection("meetings");

  const scheduleQuery = scheduleRef
    .where("researcherID", "==", researcherID)
    .where("time", ">=", moment(date).startOf("day").valueOf())
    .where("time", "<=", moment(date).endOf("day").valueOf())
    .orderBy("time", "asc");
}
