import { useColor } from "hooks";
import { Box, Divider } from "@chakra-ui/react";

import Header from "components/feature/External/HomeSections/Header/Header";
import Footer from "components/feature/External/HomeSections/Footer/Footer";

import HeroSection from "./HeroSection";
import PromotionSection from "./PromotionSection";
import SpotlightSection from "./SpotlightSection";
import DiscoverSection from "./DiscoverSection";
import { useRef } from "react";

function HomePage() {
  const dividerColor = useColor("gray.200", "gray.600");
  const surveyScroll = useRef(null);

  return (
    <Box>
      <Header logoLink="/" />
      <HeroSection ref={surveyScroll} />
      <Divider borderColor={dividerColor} />
      <SpotlightSection ref={surveyScroll} />
      <Divider borderColor={dividerColor} />
      <PromotionSection />
      <Divider borderColor={dividerColor} />
      <DiscoverSection />
      <Divider borderColor={dividerColor} />
      <Footer
        links={{
          linkedin: "https://www.linkedin.com/company/studyfind/",
          instagram: "https://www.instagram.com/studyfindco",
          facebook: "https://www.facebook.com/studyfindco",
        }}
      />
    </Box>
  );
}

export default HomePage;
