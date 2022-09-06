import Promotion from "components/feature/External/HomeSections/Promotion/Promotion";
import PromotionAccordian from "components/feature/External/HomeSections/Promotion/PromotionAccordian";
import SectionWrapper from "components/feature/External/HomeSections/SectionWrapper";
import { useColor } from "hooks";

const FEATURES = [
  {
    title: "Simplifying Communication",
    desc: "Creating a unique experience in how participants and researchers exchange information.",
  },
  {
    title: "Seamless Coordination",
    desc: "StudyFind's Research Portal allows seamless coordination with participants pre and post-screening.",
  },
  {
    title: "Diversifying Collaboration",
    desc: "Not just understanding each community, but making way to increase representation.",
  },
];

function PromotionSection() {
  const background = useColor("gray.100", "gray.800");

  return (
    <>
      <SectionWrapper background={background}>
        <Promotion features={FEATURES} />
      </SectionWrapper>
      <PromotionAccordian />
    </>
  );
}

export default PromotionSection;
