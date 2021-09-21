import { FaClock } from "react-icons/fa";

const deleteReminder = ({ meta }) => {
  const { researcherName, reminderName, studyID } = meta;

  return {
    title: "Reminder Deleted",
    body: `A reminder titled ${reminderName} was deleted by researcher ${researcherName} from study ${studyID}`,
    link: "/",
    color: "red",
    icon: FaClock,
  };
};

export default deleteReminder;
