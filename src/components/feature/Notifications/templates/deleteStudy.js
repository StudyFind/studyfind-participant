import { FaNotesMedical } from "react-icons/fa";

const deleteStudy = ({ meta }) => {
  const { studyID } = meta;

  return {
    title: "Study Deleted",
    body: `You deleted study ${studyID}. Click here to view the study.`,
    link: `/study/${studyID}/details`,
    color: "red",
    icon: FaNotesMedical,
  };
};

export default deleteStudy;
