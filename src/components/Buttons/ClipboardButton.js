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
