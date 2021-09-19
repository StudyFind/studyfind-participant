import { useDetectDevice } from "hooks";

import { Flex, Heading, Image } from "@chakra-ui/react";
import SFLogo from "images/logo.png";

function HeaderLogo() {
  const { isPhone } = useDetectDevice();
  const headingStyles = isPhone ? { size: "md" } : { fontSize: "25px" };

  return (
    <Flex align="center">
      <Image
        src={SFLogo}
        height={isPhone ? "1.5rem" : "1.8rem"}
        marginRight={isPhone ? "8px" : "10px"}
      />
      <Heading {...headingStyles}>StudyFind</Heading>
    </Flex>
  );
}

export default HeaderLogo;
