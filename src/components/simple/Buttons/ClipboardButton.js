import React from "react";
import { Button, useClipboard } from "@chakra-ui/react";
import { FaCopy, FaCheckCircle } from "react-icons/fa";

export const ClipboardButton = ({ children, text, copiedText, ...rest }) => {
  const { hasCopied, onCopy } = useClipboard(text);

  if (hasCopied) {
    return (
      <Button
        variant="outline"
        colorScheme="green"
        bg="green.100"
        borderColor="green.200"
        _hover={{ bg: "green.100" }}
        leftIcon={<FaCheckCircle />}
        onClick={onCopy}
        {...rest}
      >
        {copiedText || children}
      </Button>
    );
  }

  return (
    <Button variant="outline" color="gray.500" leftIcon={<FaCopy />} onClick={onCopy}>
      {children}
    </Button>
  );
};

export default ClipboardButton;

// NEW IMPLEMENTATION

// import { useColor, useClipboard } from "hooks";
// import { Button } from "@chakra-ui/react";
// import { FaCopy, FaCheckCircle } from "react-icons/fa";
// import { SecondaryButton } from "./SecondaryButton";

// export const ClipboardButton = ({ children, copyTextValue, buttonTextOnCopied, ...rest }) => {
//   const { hasCopied, onCopy } = useClipboard(copyTextValue);

//   const defaultHoverBackground = useColor("gray.100", "gray.800");
//   const defaultHover = { background: defaultHoverBackground };
//   const defaultActive = { background: defaultHoverBackground };

//   const copiedBackground = useColor("green.100", "green.800");
//   const copiedBorderColor = useColor("green.200", "green.700");
//   const copiedHover = { background: copiedBackground };
//   const copiedActive = { background: copiedBackground };

//   if (hasCopied) {
//     return (
//       <Button
//         variant="outline"
//         colorScheme="green"
//         background={copiedBackground}
//         borderColor={copiedBorderColor}
//         _hover={copiedHover}
//         _active={copiedActive}
//         leftIcon={<FaCheckCircle />}
//         onClick={onCopy}
//         {...rest}
//       >
//         {buttonTextOnCopied || children}
//       </Button>
//     );
//   }

//   return (
//     <SecondaryButton
//       leftIcon={<FaCopy />}
//       onClick={() => {
//         console.log("clicked");
//         onCopy();
//       }}
//       _hover={defaultHover}
//       _active={defaultActive}
//     >
//       {children}
//     </SecondaryButton>
//   );
// };

// export default ClipboardButton;
