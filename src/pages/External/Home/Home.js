import { useColor } from "hooks";
import { Box, Divider } from "@chakra-ui/react";

import Header from "components/feature/External/HomeSections/Header/Header";
import Footer from "components/feature/External/HomeSections/Footer/Footer";

import HeroSection from "./HeroSection";
import FeatureSection from "./FeatureSection";
import TeamSection from "./TeamSection";
import MailingSection from "./MailingSection";
import PricingSection from "./PricingSection";

function HomePage() {
  const dividerColor = useColor("gray.200", "gray.600");

  return (
    <Box>
      <Header logoLink="/#" buttonText="Start Free Trial" buttonLink="/auth" />
      <HeroSection />
      <Divider borderColor={dividerColor} />
      <FeatureSection />
      <Divider borderColor={dividerColor} />
      <TeamSection />
      <Divider borderColor={dividerColor} />
      <PricingSection />
      <Divider borderColor={dividerColor} />
      <MailingSection />
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
