import Promotion from "components/feature/External/HomeSections/Promotion/Promotion";
import SectionWrapper from "components/feature/External/HomeSections/SectionWrapper";
import { useColor } from "hooks";

function PromotionSection() {
  const background = useColor("gray.100", "gray.800");

  const infomation = {
    heading: "Communicating, Coordinating, and Collaborating",
    tagline: "should not require separate tools",
    desc: "StudyFind is an app and web-based platform that implements innovations in the research and academic field. Our services aim to optimize the participant recruitment process for research studies by providing a means of connection and communication between researchers and research participants.",
    videoLink: "https://www.youtube.com/embed/5_iZ0r33wWk",
  };

  return (
    <SectionWrapper background={background}>
      <Promotion infomation={infomation} />
    </SectionWrapper>
  );
}

export default PromotionSection;
