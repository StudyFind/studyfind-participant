import AlertBar from "components/feature/EmailVerificationBanner/AlertBar";
import { Text } from "@chakra-ui/react";

function SpotlightAlert({ text }) {
  return (
    <AlertBar
      position="absolute"
      top="25px"
      height="auto"
      minHeight="50px"
      width="95%"
      marginX="50px"
    >
      <Text>{text}</Text>
    </AlertBar>
  );
}

export default SpotlightAlert;
