import Promotion from "components/feature/External/HomeSections/Promotion/Promotion";
import SectionWrapper from "components/feature/External/HomeSections/SectionWrapper";
import { useColor } from "hooks";

function PromotionSection() {
  const background = useColor("gray.100", "gray.800");

  const infomation = {
    heading: "Communicating, Coordinating, and Collaborating",
    tagline: "Should not require separate tools",
    desc: "Studyfind is an app and web based platform that implements technological innovations in the research and academic field. The aim of our services is to optimize the participant recruitment process for research studies by provind a means of connection and communication between researches and research participants",
    videoLink: "https://www.youtube.com/embed/5_iZ0r33wWk",
  };

  return (
    <SectionWrapper background={background}>
      <Promotion infomation={infomation} />
    </SectionWrapper>
  );
}

export default PromotionSection;
