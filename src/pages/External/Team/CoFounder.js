import { useColor, useDetectDevice } from "hooks";

import { Box, Heading, Flex, Text, Image } from "@chakra-ui/react";
import Andrew from "../../../images/founders/andrew_square.png";

function CoFounder() {
  const { isPhone, responsive } = useDetectDevice();
  const background = useColor("gray.100", "gray.800");
  return (
    <Box
      id="cofounder"
      padding="40px"
      paddingTop="100px"
      background={background}
    >
      <Heading
        color="blue.500"
        size="2xl"
        lineHeight="1.25"
        textAlign="left"
        marginLeft="70px"
        marginBottom="40px"
      >
        Co-Founder
      </Heading>
      <Flex flexDirection={isPhone ? "column" : "row"}>
        <Box marginLeft="70px" overflow="hidden">
          <Image src={Andrew} width="250px" height="250px" />
        </Box>
        <Box width="550px">
          <Heading
            align="left"
            fontSize="32px"
            marginTop="20px"
            marginLeft="60px"
            marginBottom="10px"
            width={isPhone ? "80%" : "100%"}
          >
            Andrew Garcia
          </Heading>
          <Text
            align="left"
            fontSize="20px"
            fontWeight="400"
            marginLeft="60px"
            marginBottom="60px"
            width={isPhone ? "300px" : "100%"}
          >
            Masters in Public Health at Emory University with a focus on Health
            Policy and Management
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}

export default CoFounder;
