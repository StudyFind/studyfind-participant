import { useDetectDevice } from "hooks";
import { Box, Stack, Text } from "@chakra-ui/react";

function Feature({ icon, title, description }) {
  const { isPhone } = useDetectDevice();

  return (
    <Stack spacing={isPhone ? "15px" : "20px"} direction={isPhone ? "column" : "row"}>
      <Box fontSize="6xl">{icon}</Box>
      <Stack spacing="4px">
        <Text fontWeight="800" fontSize="lg">
          {title}
        </Text>
        <Box color="gray.500">{description}</Box>
      </Stack>
    </Stack>
  );
}

export default Feature;
