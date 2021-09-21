import { useColor } from "hooks";
import { Box } from "@chakra-ui/react";

function Wrapper({ children }) {
  const border = useColor("gray.200", "gray.700");
  const background = useColor("white", "gray.900");

  return (
    <Box
      borderWidth="1px"
      borderColor={border}
      background={background}
      rounded="md"
      padding="15px"
      width="100%"
    >
      {children}
    </Box>
  );
}

export default Wrapper;
