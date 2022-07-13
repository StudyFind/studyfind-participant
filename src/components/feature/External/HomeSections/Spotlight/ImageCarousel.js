import { Flex } from "@chakra-ui/react";
import CarouselCircles from "./CarouselCircles";
import CarouselSlide from "./CarouselSlide";

function ImageCarousel({
  handleSelect,
  handleBack,
  handleNext,
  itemIndex,
  items,
  ...rest
}) {
  const pic = items[itemIndex];

  return (
    <Flex
      direction="column"
      justifySelf="flex-start"
      alignItems="center"
      position="relative"
      {...rest}
    >
      <CarouselSlide
        handleBack={handleBack}
        handleNext={handleNext}
        img={pic.img}
        alt={pic.alt}
      />
      <CarouselCircles
        size={"sm"}
        itemIndex={itemIndex}
        length={items.length}
        handleSelect={handleSelect}
        position="absolute"
        bottom="-20px"
      />
    </Flex>
  );
}

export default ImageCarousel;
