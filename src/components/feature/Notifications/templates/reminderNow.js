import { FaUser } from "react-icons/fa";

const reminderNow = ({ meta }) => {
  const { study, reminder } = meta;

  return {
    title: reminder.title,
    body: `You have a reminder for ${study.id} right now`,
    link: "/",
    color: "cyan",
    icon: FaUser,
  };
};

export default reminderNow;
