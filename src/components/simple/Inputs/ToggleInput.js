import { useColor } from "hooks";
import { Button } from "@chakra-ui/react";

export const ToggleInput = ({
  name,
  label,
  colorScheme = "blue",
  value,
  onChange,
}) => {
  const defaultColor = useColor("gray.500", "gray.400");
  const defaultBackground = useColor("gray.100", "gray.800");
  const defaultBorderColor = useColor("gray.300", "gray.500");

  const activeColor = useColor(`${colorScheme}.500`, `${colorScheme}.400`);
  const activeBackground = useColor(`${colorScheme}.100`, `${colorScheme}.900`);
  const activeBorderColor = useColor(
    `${colorScheme}.400`,
    `${colorScheme}.400`
  );

  const styles = value
    ? {
        color: activeColor,
        background: activeBackground,
        borderColor: activeBorderColor,
        _hover: { activeBackground },
        _active: { activeBackground },
      }
    : {
        color: defaultColor,
        background: defaultBackground,
        borderColor: defaultBorderColor,
        _hover: { activeBackground },
        _active: { activeBackground },
      };

  const handleChange = () => {
    onChange(name, !value);
  };

  return (
    <Button size="sm" borderWidth="1px" onClick={handleChange} {...styles}>
      {label}
    </Button>
  );
};
