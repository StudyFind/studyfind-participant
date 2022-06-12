import { FaCheckCircle } from "react-icons/fa";

const confirmMeeting = ({ meta }) => {
  const meetingName = meta.meetingName;
  const participantFakename = meta.participantFakename;

  return {
    title: "Meeting Confirmed",
    body: `The participant ${participantFakename} has confirmed the meeting titled "${meetingName}"`,
    link: "/",
    color: "green",
    icon: FaCheckCircle,
  };
};

export default confirmMeeting;
