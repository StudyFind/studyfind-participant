import { useDetectDevice } from "hooks";
import SectionWrapper from "../SectionWrapper";
import HeroCallout from "./HeroCallout";

function Hero({ buttonAction, blackText, blueText, buttonText, buttonLink, image }) {
  const { isPhone } = useDetectDevice();

  return (
    <SectionWrapper
      direction="column"
      justify="flex-end"
      align="flex-start"
      padding={isPhone ? "30px" : "50px"}
      backgroundImage={isPhone || `url(${image})`}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="right"
    >
      <HeroCallout
        blackText={blackText}
        blueText={blueText}
        buttonText={buttonText}
        buttonLink={buttonLink}
        buttonAction={buttonAction}
      />
    </SectionWrapper>
  );
}

export default Hero;
