import { Stack } from "@chakra-ui/react";
import { useColor, useDetectDevice } from "hooks";

function SectionWrapper({ children, ...rest }) {
  const { isPhone } = useDetectDevice();

  const backgroundColor = useColor("white", "gray.900");

  return (
    <Stack
      justify="center"
      align="center"
      paddingX={isPhone ? "40px" : "100px"}
      paddingY="50px"
      minHeight="100vh"
      width="100vw"
      background={backgroundColor}
      {...rest}
    >
      {children}
    </Stack>
  );
}

export default SectionWrapper;
