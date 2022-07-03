import { useColor } from "hooks";
import { Box, Icon } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function CarouselSlide({ img, alt, handleNext, handleBack }) {
  const highlightColor = useColor("#706D6D", "white");
  const defaultColor = useColor("gray.200", "gray.700");
  const selectedColor = useColor("blue.500", "blue.400");

  const arrowSizes = { base: "25px", sm: "30px" };
  const arrowOffset = { base: "-12px", sm: "-15px" };
  const arrowFont = "15px";

  const iconStyleProps = {
    cursor: "pointer",
    height: arrowSizes,
    width: arrowSizes,
    color: highlightColor,
    backgroundColor: defaultColor,
    borderColor: highlightColor,
    borderRadius: "100%",
    border: "2px",

    zIndex: 1,
    position: "absolute",
    top: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    _hover: { color: selectedColor },
  };

  return (
    <Box position="relative">
      <Box left={arrowOffset} {...iconStyleProps}>
        <Icon as={FaArrowLeft} onClick={handleBack} fontSize={arrowFont} />
      </Box>
      <img src={img} alt={alt} />
      <Box right={arrowOffset} {...iconStyleProps}>
        <Icon as={FaArrowRight} onClick={handleNext} fontSize={arrowFont} />
      </Box>
    </Box>
  );
}

export default CarouselSlide;
