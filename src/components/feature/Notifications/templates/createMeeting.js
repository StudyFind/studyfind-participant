import { FaCalendarDay } from "react-icons/fa";

const createMeeting = ({ meta }) => {
  const { studyID, meetingName, meetingTime, researcherName } = meta;

  return {
    title: "Meeting Scheduled",
    body: `A meeting titled "${meetingName}" was scheduled for ${meetingTime} on ${meetingTime} with researcher ${researcherName} for study ${studyID}`,
    link: `/my-studies`,
    color: "green",
    icon: FaCalendarDay,
  };
};

export default createMeeting;
