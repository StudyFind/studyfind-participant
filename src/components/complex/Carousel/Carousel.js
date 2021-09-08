import { useEffect, useState } from "react";

import { Flex } from "@chakra-ui/react";

import CarouselDots from "./CarouselDots";

function Carousel({ items, size = "md", interval, ...rest }) {
  const [itemIndex, setItemIndex] = useState(0);

  const firstIndex = 0;
  const lastIndex = items.length - 1;

  const handleBack = () => {
    setItemIndex((prev) => (prev > firstIndex ? prev - 1 : lastIndex));
  };

  const handleNext = () => {
    setItemIndex((prev) => (prev < lastIndex ? prev + 1 : firstIndex));
  };

  useEffect(() => {
    if (interval) {
      const carouselInterval = setInterval(() => {
        handleNext();
      }, interval);

      return () => clearInterval(carouselInterval);
    }
  }, [interval]);

  const handleSelect = (index) => {
    if (0 <= index && index < items.length) {
      setItemIndex(index);
    }
  };

  return (
    <Flex direction="column" align="center">
      <Flex {...rest}>{items[itemIndex]}</Flex>
      <CarouselDots
        size={size}
        itemIndex={itemIndex}
        numberOfItems={items.length}
        handleBack={handleBack}
        handleNext={handleNext}
        handleSelect={handleSelect}
      />
    </Flex>
  );
}

export default Carousel;
