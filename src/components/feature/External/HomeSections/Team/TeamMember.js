import { useColor } from "hooks";
import { Box, VStack, Image, Text } from "@chakra-ui/react";
import { useDetectDevice } from "hooks";

function TeamMember({ image, name, position, description }) {
  const { isPhone } = useDetectDevice();

  const textColor = useColor("gray.600", "gray.400");

  return (
    <VStack align="center" spacing="20px">
      <Box overflow="hidden" height="160px" width="160px" borderRadius="320px">
        <Image src={image} />
      </Box>
      <VStack>
        <VStack spacing="0px">
          <Text fontSize="18px" fontWeight="800">
            {name}
          </Text>
          <Text fontSize="16px" fontWeight="600" color="gray.500">
            {position}
          </Text>
        </VStack>
        <Text
          fontSize="16px"
          textAlign="center"
          color={textColor}
          width={isPhone ? "80%" : "100%"}
          maxWidth="300px"
        >
          {description}
        </Text>
      </VStack>
    </VStack>
  );
}

export default TeamMember;
