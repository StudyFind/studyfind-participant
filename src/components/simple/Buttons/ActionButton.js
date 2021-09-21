import { useColor } from "hooks";
import { Tooltip, IconButton } from "@chakra-ui/react";

export const ActionButton = ({ icon, hint, size = "sm", colorScheme, onClick, ...rest }) => {
  const defaultColors = {
    color: useColor("gray.500", "gray.500"),
    bg: useColor("transparent", "transparent"),
    _hover: { bg: useColor("gray.100", "gray.900") },
    _active: { bg: useColor("gray.200", "gray.800") },
  };

  const schemedColors = {
    color: useColor(`${colorScheme}.500`, `${colorScheme}.400`),
    bg: useColor(`${colorScheme}.100`, `${colorScheme}.900`),
    _hover: { bg: useColor(`${colorScheme}.200`, `${colorScheme}.800`) },
    _active: { bg: useColor(`${colorScheme}.300`, `${colorScheme}.700`) },
  };

  const colors = colorScheme ? schemedColors : defaultColors;

  return (
    <Tooltip label={hint}>
      <IconButton size={size} icon={icon} onClick={onClick} {...colors} {...rest} />
    </Tooltip>
  );
};
