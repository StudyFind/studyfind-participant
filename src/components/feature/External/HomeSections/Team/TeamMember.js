import { useColor, useDetectDevice } from "hooks";
import { Box, VStack, HStack, Image, Text, Icon } from "@chakra-ui/react";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "components";

function TeamMember({
  image,
  drawnImage,
  name,
  position,
  description,
  linkedinURL,
}) {
  const { isPhone } = useDetectDevice();

  const textColor = useColor("gray.600", "gray.400");

  return (
    <VStack align="center" spacing="5px">
      <Box overflow="hidden" backgroundImage={image} backgroundSize="158px">
        <Image
          src={drawnImage}
          opacity="0"
          _hover={{ opacity: "0.5" }}
          boxSize="158px"
        />
      </Box>
      <VStack>
        <VStack align="left" spacing="2px" width="160px">
          <Text fontSize="18px" fontWeight="400" align="left" width="200px">
            {name}
          </Text>
          <Text fontSize="14px" fontWeight="400" align="left" width="175px">
            {position}
          </Text>
          {linkedinURL && (
            <Link
              to={linkedinURL}
              display="flex"
              align="left"
              height="13px"
              width="13px"
            >
              <Icon as={FaLinkedin} color="blue.600" />
            </Link>
          )}
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
