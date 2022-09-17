import { useDetectDevice } from "hooks";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { useAnimation } from "framer-motion";

import ImageCarousel from "./ImageCarousel";
import CarouselBlurb from "./CarouselBlurb";

function Spotlight({ items, interval }) {
  const { isPhone } = useDetectDevice();
  const [itemIndex, setItemIndex] = useState(0);

  // Fading animations
  const controls = useAnimation();

  const variants = {
    fadeIn: {
      opacity: [0, 100],
      transition: { ease: "easeInOut", duration: 5 },
    },
  };

  // Arrays for text and image
  const imgs = items.map((item) => ({ img: item.img, alt: item.alt }));
  const text = items.map((item) => ({
    title: item.title,
    desc: item.desc,
    link: item.link,
  }));

  const firstIndex = 0;
  const lastIndex = items.length - 1;

  const handleBack = () => { 
    controls.start("fadeIn"); 
    setItemIndex((prev) => (prev > firstIndex ? prev - 1 : lastIndex));
    
  };

  const handleNext = () => {
    controls.start("fadeIn"); 
    setItemIndex((prev) => (prev < lastIndex ? prev + 1 : firstIndex));
  };

  const handleSelect = (index) => {
    controls.start("fadeIn"); 
    if (0 <= index && index < items.length) {
      setItemIndex(index);
    }
  };

  useEffect(() => {
    if (interval) {
      const carouselTimer = setTimeout(() => {
        
        handleNext();
      }, interval);

      return () => clearTimeout(carouselTimer);
    }
  }, [interval, itemIndex]);

  return (
    <Flex
      alignItems="center"
      width="100%"
      paddingX="50px"
      direction={isPhone ? "column" : "row"}
      ml={isPhone && "auto"}
      mr={isPhone && "auto"}
      gridGap={"50px"}
      zIndex={1}
    >
      <ImageCarousel
        width={isPhone ? "100%" : "58%"}
        handleSelect={handleSelect}
        handleNext={handleNext}
        handleBack={handleBack}
        itemIndex={itemIndex}
        items={imgs}
        variants={variants}
        controls={controls}
      />
      <CarouselBlurb width={isPhone ? "100%" : "38%"} text={text[itemIndex]} />
    </Flex>
  );
}

export default Spotlight;
