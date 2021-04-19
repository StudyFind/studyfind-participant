import React, { useState } from "react";

import { auth, firestore } from "database/firebase";
import { Spinner } from "components"
import { useCollection } from "hooks";

import MeetingsView from "./MeetingsView";
import MeetingsError from "./MeetingsError";

function Meetings({ study, user }) {

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
    <MeetingsView meetings={meetings} handleConfirm={handleConfirm} user={user} />
  );
}

export default Meetings;