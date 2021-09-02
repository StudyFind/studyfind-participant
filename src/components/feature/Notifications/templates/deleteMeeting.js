import { FaCalendarDay } from "react-icons/fa";

const deleteMeeting = ({ meta }) => {
  const { studyID, meetingName, researcherName } = meta;

  return {
    title: "Meeting Deleted",
    body: `A meeting titled ${meetingName} was deleted by the researcher ${researcherName} from study ${studyID}`,
    link: "/my-studies",
    color: "red",
    icon: FaCalendarDay,
  };
};

export default deleteMeeting;
