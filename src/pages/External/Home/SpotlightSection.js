import SectionWrapper from "components/feature/External/HomeSections/SectionWrapper";
import Spotlight from "components/feature/External/HomeSections/Spotlight/Spotlight";
import placeholder from "images/homepage/placeholder.png";
import { Box } from "@chakra-ui/react";
import { useColor } from "hooks";
import { useDetectDevice } from "hooks";
import SpotlightAlert from "components/feature/External/HomeSections/Spotlight/SpotlightAlert";

const POSTS = [
  {
    img: placeholder,
    alt: "desc",
    title: "This is a title",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto excepturi dolor consequatur alias impedit sed eos, consectetur beatae minima quod perferendis officia nam magni dicta temporibus reprehenderit officiis aliquid quia.",
    link: "",
  },
  {
    img: placeholder,
    alt: "desc",
    title: "This is a title2",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Architecto excepturi dolor consequatur alias impedit sed eos, consectetur beatae minima quod perferendis officia nam magni dicta temporibus reprehenderit officiis aliquid quia.",
    link: "",
  },
  {
    img: placeholder,
    alt: "desc",
    title: "This is a title3",
    desc: "Lorem ipsum dolo",
    link: "",
  },
];

const ALERT = "This is a test alert!";
const INTERVAL = 5000;

function SpotlightSection() {
  const dividerColor = useColor("gray.200", "gray.600");
  const { isPhone } = useDetectDevice();

  return (
    <SectionWrapper
      paddingY={isPhone ? "100px" : "200px"}
      paddingX={0}
      position="relative"
    >
      <SpotlightAlert text={ALERT} />
      <Spotlight items={POSTS} interval={INTERVAL} />
      {isPhone || (
        <Box
          width="85%"
          height="70%"
          right={0}
          top="15%"
          background={dividerColor}
          position="absolute"
          zIndex={0}
          marginTop={"0px !important"}
        ></Box>
      )}
    </SectionWrapper>
  );
}

export default SpotlightSection;
