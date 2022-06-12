import { FaNotesMedical } from "react-icons/fa";

const createStudy = ({ meta }) => {
  const { studyID } = meta;

  return {
    title: "Study Created",
    body: `You created a new study ${studyID}. Click here to view the study.`,
    link: `/study/${studyID}/details`,
    color: "green",
    icon: FaNotesMedical,
  };
};

export default createStudy;
