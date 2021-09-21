import { useColor } from "hooks";
import { Box } from "@chakra-ui/react";

export const Card = ({ children, ...rest }) => {
  const borderColor = useColor("gray.200", "gray.700");
  const backgroundColor = useColor("white", "gray.900");

  return (
    <Box
      borderWidth="1px"
      borderColor={borderColor}
      background={backgroundColor}
      rounded="md"
      {...rest}
    >
      {children}
    </Box>
  );
};
