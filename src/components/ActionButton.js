import React from "react";

import { Tooltip, IconButton } from "@chakra-ui/react";

function ActionButton({ icon, hint, color, onClick }) {
  const colorText = color ? `${color}.500` : "gray.400";
  const colorBack = color ? `${color}.100` : "gray.50";
  const colorHover = color ? `${color}.200` : "gray.100";
  const colorActive = color ? `${color}.300` : "gray.200";

  return (
    <Tooltip label={hint}>
      <IconButton
        size="sm"
        icon={icon}
        color={colorText}
        bg={colorBack}
        _hover={{ bg: colorHover }}
        _active={{ bg: colorActive }}
        onClick={onClick}
      />
    </Tooltip>
  );
}

export default ActionButton;
