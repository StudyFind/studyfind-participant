import React from "react";
import { Box, Icon, Tooltip } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";

export const Hint = ({ label }) => (
  <Tooltip label={label}>
    <Box>
      <Icon color="gray.400" as={FaExclamationCircle} />
    </Box>
  </Tooltip>
);

// NEW IMPLEMENTATION

// import { useColor } from "hooks";
// import { Flex, Icon, Tooltip } from "@chakra-ui/react";
// import { FaExclamationCircle } from "react-icons/fa";

// export const Hint = ({ label, icon = FaExclamationCircle, colorScheme = "gray", ...rest }) => {
//   const tooltipBackground = useColor(`gray.700`, `${colorScheme}.400`);

//   return (
//     <Tooltip label={label} background={tooltipBackground}>
//       <Flex align="center">
//         <Icon color={`${colorScheme}.400`} as={icon} {...rest} />
//       </Flex>
//     </Tooltip>
//   );
// };
