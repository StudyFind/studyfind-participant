import { useDetectDevice } from "hooks";
import { Flex } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import ImageCarousel from "./ImageCarousel";
import CarouselBlurb from "./CarouselBlurb";

function Spotlight({ items, interval }) {
  const { isPhone } = useDetectDevice();
  const [itemIndex, setItemIndex] = useState(0);

  const imgs = items.map((item) => ({ img: item.img, alt: item.alt }));
  const text = items.map((item) => ({
    title: item.title,
    desc: item.desc,
    link: item.link,
  }));

  const firstIndex = 0;
  const lastIndex = items.length - 1;

  const handleBack = () => {
    setItemIndex((prev) => (prev > firstIndex ? prev - 1 : lastIndex));
  };

  const handleNext = () => {
    setItemIndex((prev) => (prev < lastIndex ? prev + 1 : firstIndex));
  };

  const handleSelect = (index) => {
    if (0 <= index && index < items.length) {
      setItemIndex(index);
    }
  };

  useEffect(() => {
    if (interval) {
      const carouselInterval = setInterval(() => {
        handleNext();
      }, interval);

      return () => clearInterval(carouselInterval);
    }
  }, [interval]);

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
      />
      <CarouselBlurb width={isPhone ? "100%" : "38%"} text={text[itemIndex]} />
    </Flex>
  );
}

export default Spotlight;
