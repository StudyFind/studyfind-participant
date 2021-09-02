import { FaUser } from "react-icons/fa";

const participantEnrolled = ({ meta }) => {
  const { participantFakename, studyID } = meta;

  return {
    title: "New Study Participant",
    body: `A new participant ${participantFakename} joined your study. Click here to view the study participants.`,
    link: `/study/${studyID}/participants`,
    color: "teal",
    icon: FaUser,
  };
};

export default participantEnrolled;
