import { useColor, useDetectDevice } from "hooks";
import { Box } from "@chakra-ui/react";
import { Loader } from "./Loader";

export const Page = ({ children, isLoading, ...rest }) => {
  const { isPhone } = useDetectDevice();

  const background = useColor("#f8f9fa", "gray.800");

  return (
    <Box background={background} padding={isPhone ? "20px" : "40px"} {...rest}>
      {isLoading ? (
        <Loader height={`calc(100vh - ${isPhone ? 40 : 80}px)`} />
      ) : (
        children
      )}
    </Box>
  );
};
