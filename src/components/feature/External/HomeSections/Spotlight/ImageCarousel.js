import { Flex } from "@chakra-ui/react";
import CarouselCircles from "./CarouselCircles";
import CarouselSlide from "./CarouselSlide";

function ImageCarousel({
  handleSelect,
  handleBack,
  handleNext,
  itemIndex,
  items,
  variants,
  controls,
  ...rest
}) {
  return (
    <>
      {items.map((item, i) => (
        <Flex
          key={i}
          display={i === itemIndex ? "block" : "none"}
          direction="column"
          justifySelf="flex-start"
          alignItems="center"
          position="relative"
          {...rest}
        >
          <CarouselSlide
            handleBack={handleBack}
            handleNext={handleNext}
            variants={variants}
            controls={controls}
            img={item.img}
            alt={item.alt}
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
      ))}
    </>
  );
}

export default ImageCarousel;
