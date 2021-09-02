import { Heading, HStack, Image } from "@chakra-ui/react";
import SFLogo from "images/logo.png";

function HeroLogo() {
  return (
    <HStack align="center" spacing="10px">
      <Image src={SFLogo} height="1.8rem" />
      <Heading fontSize="1.7rem">StudyFind</Heading>
    </HStack>
  );
}

export default HeroLogo;
