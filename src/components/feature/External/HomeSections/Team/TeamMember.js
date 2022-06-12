import { useColor, useDetectDevice } from "hooks";
import { Box, VStack, HStack, Image, Text, Icon } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "components";

function TeamMember({ image, name, position, description, linkedinURL }) {
  const { isPhone } = useDetectDevice();

  const textColor = useColor("gray.600", "gray.400");

  return (
    <VStack align="center" spacing="20px">
      <Box overflow="hidden" height="160px" width="160px" borderRadius="320px">
        <Image src={image} />
      </Box>
      <VStack>
        <VStack spacing="0px">
          <HStack spacing="5px" align="center">
            <Text fontSize="18px" fontWeight="800" align="center">
              {name}
            </Text>
            {linkedinURL && (
              <Link to={linkedinURL} display="flex" align="center">
                <Icon as={FaLinkedin} color="blue.500" />
              </Link>
            )}
          </HStack>
          <Text
            fontSize="16px"
            fontWeight="600"
            color="gray.500"
            align="center"
          >
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
