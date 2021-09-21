import { FaClock } from "react-icons/fa";

const createReminder = ({ meta }) => {
  const { reminderName, studyID } = meta;

  return {
    title: "Reminder Created",
    body: `A reminder titled "${reminderName}" for study ${studyID}`,
    link: "/",
    color: "green",
    icon: FaClock,
  };
};

export default createReminder;
