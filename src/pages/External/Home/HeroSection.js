import Background from "images/homepage/microscope.jpg";
import Hero from "components/feature/External/HomeSections/Hero/Hero";
import { forwardRef } from "react";

const HeroSection = (props, ref) => {
  const buttonAction = () => {
    ref.current.scrollIntoView({
      block: "end",
      behavior: "smooth",
    });
  };

  return (
    <>
      <Hero
        blackText="We need you to help us lead the way in"
        blueText="diversifying the clinical trial space"
        buttonText="Join registry"
        buttonLink="/auth"
        image={Background}
        buttonAction={buttonAction}
      />
    </>
  );
};

export default forwardRef(HeroSection);
