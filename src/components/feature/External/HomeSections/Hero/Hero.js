import { useDetectDevice } from "hooks";

import SectionWrapper from "../SectionWrapper";
import HeroLogo from "./HeroLogo";
import HeroCallout from "./HeroCallout";

function Hero({ blackText, blueText, buttonText, buttonLink, image }) {
  const { isPhone } = useDetectDevice();

  return (
    <SectionWrapper
      direction="column"
      justify="space-between"
      align="flex-start"
      padding={isPhone ? "30px" : "50px"}
      backgroundImage={isPhone || `url(${image})`}
      backgroundSize="contain"
      backgroundRepeat="no-repeat"
      backgroundPosition="right"
    >
      <HeroLogo />
      <HeroCallout
        blackText={blackText}
        blueText={blueText}
        buttonText={buttonText}
        buttonLink={buttonLink}
      />
    </SectionWrapper>
  );
}

export default Hero;
