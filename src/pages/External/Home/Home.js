import { useColor } from "hooks";
import { Box, Divider } from "@chakra-ui/react";

import Header from "components/feature/External/HomeSections/Header/Header";
import Footer from "components/feature/External/HomeSections/Footer/Footer";

import HeroSection from "./HeroSection";
import PromotionSection from "./PromotionSection";
import SpotlightSection from "./SpotlightSection";
import DiscoverSection from "./DiscoverSection";

function HomePage() {
  const dividerColor = useColor("gray.200", "gray.600");

  return (
    <Box>
      <Header logoLink="/#" buttonText="Join Now" buttonLink="/auth" />
      <HeroSection />
      <Divider borderColor={dividerColor} />
      <SpotlightSection />
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
