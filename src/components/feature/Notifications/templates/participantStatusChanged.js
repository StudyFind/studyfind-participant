import { FaDotCircle } from "react-icons/fa";

const participantStatusChanged = ({ meta }) => {
  const { oldStatus, newStatus, studyID } = meta;

  return {
    title: "Participant Status Changed",
    body: `Your study status was changed from "${oldStatus}" to "${newStatus}" for study ${studyID}`,
    link: "/my-studies",
    color: "teal",
    icon: FaDotCircle,
  };
};

export default participantStatusChanged;
