import { useColor } from "hooks";
import { Button } from "@chakra-ui/react";

export const EditorButton = ({ children, icon, colorScheme = "gray", onClick, ...rest }) => {
  const colorText = useColor(`${colorScheme}.500`, `${colorScheme}.400`);
  const colorBack = useColor(`${colorScheme}.100`, `${colorScheme}.900`);
  const colorHover = useColor(`${colorScheme}.200`, `${colorScheme}.800`);
  const colorBorder = useColor(`${colorScheme}.500`, `${colorScheme}.400`);

  return (
    <Button
      size="sm"
      leftIcon={icon}
      background={colorBack}
      color={colorText}
      borderWidth="1px"
      borderColor={colorBorder}
      _hover={{ bg: colorHover }}
      onClick={onClick}
      {...rest}
    >
      {children}
    </Button>
  );
};
