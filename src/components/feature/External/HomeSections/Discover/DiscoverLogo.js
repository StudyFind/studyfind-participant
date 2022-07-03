import SFLogo from "images/logo.png";
import { Text, Image, Flex } from "@chakra-ui/react";

function DiscoverLogo({ text, ...rest }) {
  return (
    <Flex
      padding="15px"
      justify="center"
      direction="column"
      alignItems="center"
      {...rest}
    >
      <Image src={SFLogo} height="3rem" />
      <Text textAlign="center">{text}</Text>
    </Flex>
  );
}

export default DiscoverLogo;
