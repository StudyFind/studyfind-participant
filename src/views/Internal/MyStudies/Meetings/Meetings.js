import React, { useState } from "react";

import { auth, firestore } from "database/firebase";
import { Spinner } from "components"
import { useCollection } from "hooks";

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

  if (loading) return <Spinner />;
  if (error) return <MeetingsError />;

  return(
    <MeetingsView meetings={meetings} />
  );
}

export default Meetings;