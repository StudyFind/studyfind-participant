import { FaCalendarDay } from "react-icons/fa";

const updateMeeting = ({ meta }) => {
  const { studyID, meetingName, researcherName } = meta;

  return {
    title: "Meeting Updated",
    body: `A meeting titled ${meetingName} was updated by the researcher ${researcherName} from study ${studyID}`,
    link: "/my-studies",
    color: "blue",
    icon: FaCalendarDay,
  };
};

export default updateMeeting;
