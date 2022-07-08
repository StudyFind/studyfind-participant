import { useDetectDevice } from "hooks";
import Discover from "components/feature/External/HomeSections/Discover/Discover";
import SectionWrapper from "components/feature/External/HomeSections/SectionWrapper";

function DiscoverSection() {
  const { isPhone } = useDetectDevice();

  return (
    <SectionWrapper paddingY={isPhone ? "50px" : "0px"} paddingX={0}>
      <Discover />
    </SectionWrapper>
  );
}

export default DiscoverSection;
