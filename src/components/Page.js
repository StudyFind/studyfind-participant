import { Box } from "@chakra-ui/react";
import { Loader } from "components";

export const Page = ({ children, isLoading }) => (
  <Box p="40px" h="100%" bg="#f8f9fa">
    {isLoading ? <Loader /> : children}
  </Box>
);
