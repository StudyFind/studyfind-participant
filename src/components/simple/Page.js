import { useColor } from "hooks";
import { Box } from "@chakra-ui/react";
import { Loader } from "./Loader";

export const Page = ({ children, isLoading, ...rest }) => {
  const background = useColor("#f8f9fa", "gray.800");

  return (
    <Box background={background} {...rest}>
      {isLoading ? <Loader height="calc(100vh - 80px)" /> : children}
    </Box>
  );
};
