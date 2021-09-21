import { FaNotesMedical } from "react-icons/fa";

const updateStudy = ({ meta }) => {
  const { studyID } = meta;

  return {
    title: "Study Updated",
    body: `You updated study ${studyID}. Click here to view the study.`,
    link: `/study/${studyID}/details`,
    color: "blue",
    icon: FaNotesMedical,
  };
};

export default updateStudy;
