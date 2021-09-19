import { useColor, useDetectDevice } from "hooks";
import { Box, HStack } from "@chakra-ui/react";

import FooterCopyright from "./FooterCopyright";
import FooterLinks from "./FooterLinks";

function Footer({ links }) {
  const { isPhone } = useDetectDevice();
  const background = useColor("white", "gray.900");

  return (
    <Box>
      <HStack
        justify="space-between"
        align="center"
        padding={isPhone ? "20px" : "20px 50px"}
        background={background}
      >
        <FooterCopyright />
        <FooterLinks links={links} />
      </HStack>
    </Box>
  );
}

export default Footer;
