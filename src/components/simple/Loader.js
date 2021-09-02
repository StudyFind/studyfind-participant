import React from "react";
import { Flex, Text, Spinner } from "@chakra-ui/react";

export const Loader = ({ text }) => (
  <Flex gridGap="10px" justify="center" align="center" h="100%" w="100%">
    <Spinner emptyColor="gray.200" color="blue.500" thickness="4px" speed="0.5s" size="lg" />
    <Text fontSize="lg" fontWeight="500">
      {text}
    </Text>
  </Flex>
);

// NEW IMPLEMENTATION

// import { useColor } from "hooks";
// import { Flex, Spinner } from "@chakra-ui/react";

// export const Loader = ({ size = "lg", colorScheme = "blue" }) => {
//   const thickness = ["xs", "sm", "md", "lg", "xl"].indexOf(size) + 1;

//   const filledColor = useColor(`${colorScheme}.500`, `${colorScheme}.400`);
//   const emptyColor = useColor("gray.200", "gray.700");

//   return (
//     <Flex justify="center" align="center" width="100%" height="calc(100vh - 80px)">
//       <Spinner
//         speed="0.5s"
//         color={filledColor}
//         emptyColor={emptyColor}
//         thickness={thickness}
//         size={size}
//       />
//     </Flex>
//   );
// };
