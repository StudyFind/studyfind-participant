import { Button } from "@chakra-ui/react";

export const EditorButton = ({
  children,
  icon,
  color = "gray",
  onClick,
  ...rest
}) => {
  const colorText = `${color}.500`;
  const colorBack = `${color}.100`;
  const colorHover = `${color}.200`;
  const colorBorder = `${color}.500`;

  return (
    <Button
      size="sm"
      leftIcon={icon}
      bg={colorBack}
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

// NEW IMPLEMENTATION

// import { useColor } from "hooks";
// import { Button } from "@chakra-ui/react";

// export const EditorButton = ({ children, icon, colorScheme = "gray", onClick, ...rest }) => {
//   const colorText = useColor(`${colorScheme}.500`, `${colorScheme}.400`);
//   const colorBack = useColor(`${colorScheme}.100`, `${colorScheme}.900`);
//   const colorHover = useColor(`${colorScheme}.200`, `${colorScheme}.800`);
//   const colorBorder = useColor(`${colorScheme}.500`, `${colorScheme}.400`);

//   return (
//     <Button
//       size="sm"
//       leftIcon={icon}
//       background={colorBack}
//       color={colorText}
//       borderWidth="1px"
//       borderColor={colorBorder}
//       _hover={{ bg: colorHover }}
//       onClick={onClick}
//       {...rest}
//     >
//       {children}
//     </Button>
//   );
// };
