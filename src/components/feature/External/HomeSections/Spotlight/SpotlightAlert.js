import AlertBar from "components/feature/EmailVerificationBanner/AlertBar";
import { Flex, Text } from "@chakra-ui/react";

function SpotlightAlert({ children }) {
  return (
    <AlertBar
      position="absolute"
      top="25px"
      height="auto"
      minHeight="50px"
      width="95%"
      marginX="50px"
    >
      <Flex w="100%" justify="center">{children}</Flex>
    </AlertBar>
  );
}

export default SpotlightAlert;
