import { auth, firestore } from "database/firebase";

function MeetingsContext({ studyID, participantID }) {
  const researcherID = auth.currentUser.uid;

  const meetingsRef = firestore.collection("meetings");

  const meetingsQuery = meetingsRef
    .where("studyID", "==", studyID)
    .where("researcherID", "==", researcherID)
    .where("participantID", "==", participantID);

  const createMeeting = ({ name, link, time }) => {
    meetingsRef.add({
      name,
      link,
      time,
      studyID,
      researcherID,
      participantID,
      confirmedByParticipant: false,
    });
  };

  const updateMeeting = (meetingID, { name, link, time }) => {
    meetingsRef.doc(meetingID).update({ name, link, time });
  };

  const deleteMeeting = (meetingID) => {
    meetingsRef.doc(meetingID).delete();
  };
}
