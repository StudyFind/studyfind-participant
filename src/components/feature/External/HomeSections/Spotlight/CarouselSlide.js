import { useColor, useDetectDevice } from "hooks";
import { Box, chakra, Icon, Image } from "@chakra-ui/react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { isValidMotionProp, motion } from "framer-motion";

// For opacity animation
const MotionDiv = chakra(motion.div, {
  shouldForwardProp: (prop) => isValidMotionProp(prop) || prop === "children",
});

function CarouselSlide({ img, alt, handleNext, handleBack, variants, controls, itemIndex }) {
  const highlightColor = useColor("#706D6D", "white");
  const defaultColor = useColor("gray.200", "gray.700");
  const selectedColor = useColor("blue.500", "blue.400");

  const { isPhone } = useDetectDevice();

  const iconStyleProps = {
    cursor: "pointer",
    height: "30px",
    width: "30px",
    color: highlightColor,
    backgroundColor: defaultColor,
    borderColor: highlightColor,
    borderRadius: "100%",
    border: "2px",
    zIndex: 1,
    position: "absolute",
    top: isPhone ? "45%" : "47%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "15px",

    _hover: { color: selectedColor },
  };

  return (
    <Box position="relative">
      <Box left={"-15px"} {...iconStyleProps}>
        <Icon as={FaArrowLeft} onClick={handleBack} />
      </Box>
      <MotionDiv animate={controls} variants={variants}>
        <Image src={img} alt={alt} boxShadow={"md"} />
      </MotionDiv>
      <Box right={"-15px"} {...iconStyleProps}>
        <Icon as={FaArrowRight} onClick={handleNext} />
      </Box>
    </Box>
  );
}

export default CarouselSlide;
