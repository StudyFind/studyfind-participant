import { auth, firestore } from "database/firebase";
import { useCollection } from "hooks";

import { Spinner } from "components"
import MeetingsView from "./MeetingsView";
import MeetingsError from "./MeetingsError";

function Meetings({ study }) {
  const { uid } = auth.currentUser;

  const [meetings, loading, error] = useCollection(
    firestore
      .collection("meetings")
      .where("participantID", "==", uid)
      .where("studyID", "==", study.id)
      .orderBy("time", "desc")
  );

  const handleConfirm = (meeting) => {
    firestore
      .collection("meetings")
      .doc(meeting.id)
      .update({
        confirmedByParticipant: true
      });
  };

  if (loading) return <Spinner />;
  if (error) return <MeetingsError />;

  return(
    <MeetingsView meetings={meetings} handleConfirm={handleConfirm} />
  );
}

export default Meetings;
