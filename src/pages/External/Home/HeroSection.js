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
        blackText="Participating in clinical trials"
        blueText="is just a click away"
        buttonText="Join Now"
        buttonLink="/auth"
        image={Background}
        buttonAction={buttonAction}
      />
    </>
  );
};

export default forwardRef(HeroSection);
