import SectionWrapper from "components/feature/External/HomeSections/SectionWrapper";
import Spotlight from "components/feature/External/HomeSections/Spotlight/Spotlight";
import placeholder from "images/homepage/placeholder.png";
import { Box, Text } from "@chakra-ui/react";
import { useColor } from "hooks";
import { useDetectDevice } from "hooks";
import SpotlightAlert from "components/feature/External/HomeSections/Spotlight/SpotlightAlert";
import { forwardRef } from "react";
import latinxcommunity from "images/homepage/latinxcommunity.png";
import blackcommunity from "images/homepage/blackcommunity.png";
import womencommunity from "images/homepage/womencommunity.png";
import { Link } from "components";

const POSTS = [
  {
    img: blackcommunity,
    alt: "An illustrated portrait of six black family members all standing together; ages ranging from infant to senior.",
    title: "Black",
    desc: (
      <Text>
        This survey and project aim to better understand how the Black community
        interacts with clinical trials and the research space. Historical
        realities have destroyed the trust between the Black community,
        researchers and physicians. We aim not only to understand the specific
        issues that surround this community, but we want to increase
        representation. The goal is to create a registry of individuals who are
        interested, willing, and able to join us in our mission to diversify
        clinical trials!
      </Text>
    ),
    link: "",
  },
  {
    img: latinxcommunity,
    alt: "Four illustrated LatinX members standing on either side of a medicine vial with a label reading: “Registrar Para Estudios.",
    title: "Hispanic / Latinx",
    desc: (
      <Text>
        This survey and project aim to better understand how the Hispanic/
        Latinx community interacts with clinical trials and the research space.
        We aim not only to understand the specific issues that surround this
        community, but we want to increase representation. The goal is to create
        a registry of Hispanic/Latinx folks that would be interested, willing,
        and able to join us in our mission to diversify clinical trials!
      </Text>
    ),
    link: "https://forms.gle/joQLT6vx8v7EPrY5A",
  },
  /*
  {
    img: blackcommunity,
    alt: "desc",
    title: "Title of specific survey",
    desc: (
      <Text>
        The goal of this survey is to better understand the needs of the{" "}
        <strong>Black</strong> community regarding clinical trials. This takes
        less than (10 minutes) and your responses will aid us in creating our
        participant registry!
      </Text>
    ),
    link: "",
  },
  {
    img: womencommunity,
    alt: "desc",
    title: "Title of specific survey",
    desc: (
      <Text>
        The goal of this survey is to better understand the needs of the{" "}
        <strong>women</strong> community regarding clinical trials. This takes
        less than (10 minutes) and your responses will aid us in creating our
        participant registry!
      </Text>
    ),
    link: "",
  },
  {
    img: placeholder,
    alt: "desc",
    title: "Title of specific survey",
    desc: (
      <Text>
        The goal of this survey is to better understand the needs of the
        <strong>AAPI</strong> community regarding clinical trials. This takes
        less than (10 minutes) and your responses will aid us in creating our
        participant registry!
      </Text>
    ),
    link: "",
  },
  */
];
const INTERVAL = 10000;

const SpotlightSection = (props, ref) => {
  const dividerColor = useColor("gray.200", "gray.600");
  const { isPhone } = useDetectDevice();

  return (
    <SectionWrapper
      paddingY={"200px"}
      paddingX={0}
      position="relative"
    >
      <SpotlightAlert>
        <Text textAlign="center">
          <strong>OUT NOW: </strong>
          <Link
            to="https://forms.gle/joQLT6vx8v7EPrY5A"
            textDecoration="underline"
          >
            Hispanic/LatinX Community Survey & Registry
          </Link>{" "}
          Come back to see the next community in the upcoming weeks!
        </Text>
      </SpotlightAlert>

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
      {/* Scrolling page here */}
      <Box ref={ref} position="absolute" bottom={isPhone ? "5%" : "15%"}></Box>
    </SectionWrapper>
  );
};

export default forwardRef(SpotlightSection);
