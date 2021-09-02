import React from "react";
import { Icon, Flex, Tooltip } from "@chakra-ui/react";
import { FaExclamationCircle, FaTimesCircle, FaCheckCircle } from "react-icons/fa";

export const ConfirmationStatus = ({ children, status, hint }) => {
  const { color, icon } = {
    success: { color: "green", icon: FaCheckCircle },
    neutral: { color: "gray", icon: FaExclamationCircle },
    failure: { color: "red", icon: FaTimesCircle },
  }[status || "neutral"];

  return (
    <Tooltip label={hint}>
      <Flex
        px="12px"
        h="32px"
        align="center"
        gridGap="8px"
        cursor="default"
        fontSize="14px"
        fontWeight="600"
        rounded="md"
        color={`${color}.500`}
        borderColor={`${color}.300`}
        borderWidth="1px"
      >
        <Icon as={icon} />
        {children}
      </Flex>
    </Tooltip>
  );
};

// NEW IMPLEMENTATION

// import { useColor } from "hooks";
// import { Icon, Flex, Text, Tooltip } from "@chakra-ui/react";
// import {
//   FaExclamationCircle,
//   FaTimesCircle,
//   FaCheckCircle,
// } from "react-icons/fa";

// export const ConfirmationStatus = ({ children, status, hint }) => {
//   const { color, icon } = {
//     success: { color: "green", icon: FaCheckCircle },
//     neutral: { color: "gray", icon: FaExclamationCircle },
//     failure: { color: "red", icon: FaTimesCircle },
//   }[status || "neutral"];

//   const textColor = useColor(`${color}.500`, `${color}.300`);
//   const borderColor = useColor(`${color}.400`, `${color}.300`);

//   return (
//     <Tooltip label={hint}>
//       <Flex
//         padding="6px 12px"
//         align="center"
//         gridGap="8px"
//         cursor="default"
//         fontSize="14px"
//         fontWeight="600"
//         rounded="md"
//         color={textColor}
//         borderColor={borderColor}
//         borderWidth="1px"
//       >
//         <Icon as={icon} />
//         <Text>{children}</Text>
//       </Flex>
//     </Tooltip>
//   );
// };
