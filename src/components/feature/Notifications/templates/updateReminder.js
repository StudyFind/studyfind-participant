import { FaClock } from "react-icons/fa";

const updateReminder = ({ meta }) => {
  const { researcherName, reminderName, studyID } = meta;

  return {
    title: "Reminder Updated",
    body: `A reminder titled ${reminderName} was updated by researcher ${researcherName} from study ${studyID}`,
    link: "/",
    color: "blue",
    icon: FaClock,
  };
};

export default updateReminder;
