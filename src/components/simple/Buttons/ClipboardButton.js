import { useColor, useClipboard } from "hooks";
import { Button } from "@chakra-ui/react";
import { FaCopy, FaCheckCircle } from "react-icons/fa";
import { SecondaryButton } from "./SecondaryButton";

export const ClipboardButton = ({ children, copyTextValue, buttonTextOnCopied, ...rest }) => {
  const { hasCopied, onCopy } = useClipboard(copyTextValue);

  const defaultHoverBackground = useColor("gray.100", "gray.800");
  const defaultHover = { background: defaultHoverBackground };
  const defaultActive = { background: defaultHoverBackground };

  const copiedBackground = useColor("green.100", "green.800");
  const copiedBorderColor = useColor("green.200", "green.700");
  const copiedHover = { background: copiedBackground };
  const copiedActive = { background: copiedBackground };

  if (hasCopied) {
    return (
      <Button
        variant="outline"
        colorScheme="green"
        background={copiedBackground}
        borderColor={copiedBorderColor}
        _hover={copiedHover}
        _active={copiedActive}
        leftIcon={<FaCheckCircle />}
        onClick={onCopy}
        {...rest}
      >
        {buttonTextOnCopied || children}
      </Button>
    );
  }

  return (
    <SecondaryButton
      leftIcon={<FaCopy />}
      onClick={onCopy}
      _hover={defaultHover}
      _active={defaultActive}
    >
      {children}
    </SecondaryButton>
  );
};

export default ClipboardButton;
