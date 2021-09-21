import { FaCheckCircle } from "react-icons/fa";

const confirmReminder = ({ meta }) => {
  const reminderTitle = meta.reminderTitle;
  const participantFakename = meta.participantFakename;

  return {
    title: "Reminder Confirmed",
    body: `The participant ${participantFakename} has confirmed the reminder titled "${reminderTitle}"`,
    link: "/",
    color: "green",
    icon: FaCheckCircle,
  };
};

export default confirmReminder;
