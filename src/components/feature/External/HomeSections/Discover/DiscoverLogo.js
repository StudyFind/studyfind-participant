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
      <Image src={SFLogo} height="3rem" mb={5} />
      <Text textAlign="center" maxWidth={"200px"}>
        {text}
      </Text>
    </Flex>
  );
}

export default DiscoverLogo;
