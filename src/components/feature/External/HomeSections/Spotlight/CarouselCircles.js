import { HStack, Box } from "@chakra-ui/react";
import { useColor } from "hooks";

function CarouselCircles({ handleSelect, itemIndex, length, ...rest }) {
  const selectedColor = useColor("blue.500", "blue.400");
  const defaultColor = useColor("gray.300", "gray.700");
  const pixelSizeString = `8px`;

  return (
    <HStack {...rest} spacing={pixelSizeString} w="100%" justify="center">
      {Array(length)
        .fill(true)
        .map((_, i) => (
          <Box
            key={i}
            rounded="full"
            cursor="pointer"
            width={pixelSizeString}
            height={pixelSizeString}
            background={i === itemIndex ? selectedColor : defaultColor}
            onClick={() => handleSelect(i)}
          />
        ))}
    </HStack>
  );
}

export default CarouselCircles;
