import { FaUser } from "react-icons/fa";

const meetingNow = ({ meta }) => {
  const { study, meeting } = meta;

  return {
    title: "Meeting Now",
    body: `Reminder that you have a meeting with ${study.researcher.name} right now`,
    link: meeting.link,
    color: "cyan",
    icon: FaUser,
  };
};

export default meetingNow;
