import React from "react";
import { auth, firestore } from "database/firebase";
import { useCollection } from "hooks";

import { Loader } from "@studyfind/components";
import RemindersView from "./RemindersView";
import RemindersError from "./RemindersError";

function Reminders({ study }) {
  const { uid } = auth.currentUser;

  const [reminders, loading, error] = useCollection(
    firestore
      .collection("reminders")
      .where("participantID", "==", uid)
      .where("studyID", "==", study.id)
  );

  const handleConfirm = (reminder) => {
    firestore.collection("reminders").doc(reminder.id).update({
      confirmedByParticipant: true,
    });
  };

  if (loading) return <Loader />;
  if (error) return <RemindersError />;

  return <RemindersView reminders={reminders} handleConfirm={handleConfirm} />;
}

export default Reminders;
