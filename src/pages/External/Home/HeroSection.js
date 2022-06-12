import Background from "images/microscope.jpg";
import Hero from "components/feature/External/HomeSections/Hero/Hero";

function HeroSection() {
  return (
    <Hero
      blackText="Participating in clinical trials"
      blueText="is just a click away"
      buttonText="Join Now"
      buttonLink="/auth"
      image={Background}
    />
  );
}

export default HeroSection;
