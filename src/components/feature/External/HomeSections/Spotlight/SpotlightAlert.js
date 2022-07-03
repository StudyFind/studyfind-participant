import AlertBar from "components/feature/EmailVerificationBanner/AlertBar";
import { Text, Flex } from "@chakra-ui/react";
import { useDetectDevice } from "hooks";

function SpotlightAlert({ text }) {
  const { isPhone } = useDetectDevice();

  return (
    <AlertBar
      position="absolute"
      top={isPhone ? "2.5%" : "4%"}
      height="50px"
      width="95%"
      marginX="50px"
    >
      <Flex></Flex>
      <Text>{text}</Text>
    </AlertBar>
  );
}

export default SpotlightAlert;
