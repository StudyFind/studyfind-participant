import React from "react";
import { Tooltip, IconButton } from "@chakra-ui/react";

export const ActionButton = ({ icon, hint, size, color, onClick, ...rest }) => {
  const colorText = color ? `${color}.500` : "gray.400";
  const colorBack = color ? `${color}.100` : "transparent";
  const colorHover = color ? `${color}.200` : "gray.100";
  const colorActive = color ? `${color}.300` : "gray.200";

  return (
    <Tooltip label={hint}>
      <IconButton
        size={size || "sm"}
        icon={icon}
        color={colorText}
        bg={colorBack}
        _hover={{ bg: colorHover }}
        _active={{ bg: colorActive }}
        onClick={onClick}
        {...rest}
      />
    </Tooltip>
  );
};
