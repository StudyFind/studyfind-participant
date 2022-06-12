import { FaQuestionCircle } from "react-icons/fa";

const defaultTemplate = () => {
  return {
    title: "Default Template",
    body: "This is a notification template that's being used because the notification type attribute is invalid",
    link: "/",
    color: "red",
    icon: FaQuestionCircle,
  };
};

export default defaultTemplate;
