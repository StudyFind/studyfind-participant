import { usePathParams } from "hooks";

import HorizontalTabs from "components/complex/HorizontalTabs/HorizontalTabs";
import Details from "./Details/Details";
import Locations from "./Locations/Locations";
import Questions from "./Questions/Questions";
import Resources from "./Resources/Resources";
import Files from "./Files/Files";
import { StudiesContext } from "context";
import { useContext } from "react";

function ViewStudy() {
  const { studyID } = usePathParams();
  const studies = useContext(StudiesContext);
  const study = studies.find((study) => study.id === studyID);

  const tabs = [
    {
      name: "Details",
      link: `/study/${study.id}/details`,
      content: <Details study={study} />,
    },
    // {
    //   name: "Locations",
    //   link: `/study/${study.id}/locations`,
    //   content: <Locations study={study} />,
    // },
    // {
    //   name: "Questions",
    //   link: `/study/${study.id}/questions`,
    //   content: <Questions study={study} />,
    // },
    {
      name: "Resources",
      link: `/study/${study.id}/resources`,
      content: <Resources study={study} />,
    },
    {
      name: "Files",
      link: `/study/${study.id}/files`,
      content: <Files study={study} />,
    },
  ];

  return <HorizontalTabs tabs={tabs} paddingY="20px" />;
}

export default ViewStudy;
