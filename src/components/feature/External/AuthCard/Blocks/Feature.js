import { useDetectDevice, useMediaQuery } from "hooks";
import { Box, Stack, Text } from "@chakra-ui/react";

function Feature({ icon, title, description }) {
  const { isPhone } = useDetectDevice();
  const [isLargerThan900] = useMediaQuery("(min-width: 1000px)");

  return (
    <Stack
      spacing={isPhone ? "15px" : "20px"}
      direction={isPhone ? "column" : "row"}
      paddingY={isPhone ? "5px" : "15px"}
      align="center"
    >
      <Box fontSize={"2xl"} color="#1A202C">
        {icon}
      </Box>
      <Stack spacing="4px">
        <Text
          align={isPhone && "center"}
          fontWeight="800"
          fontSize={"xs"}
        >
          {title}
        </Text>
        <Text
          align={isPhone && "center"}
          fontSize={"xs"}
          color="gray.500"
        >
          {description}
        </Text>
      </Stack>
    </Stack>
  );
}

export default Feature;
