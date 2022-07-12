import { Flex, Text, AspectRatio } from "@chakra-ui/react";

function Promotion({ infomation }) {
  const { heading, tagline, videoLink, desc } = infomation;

  return (
    <Flex direction="column" align="center">
      <Text
        fontWeight="700"
        fontSize="3xl"
        align="center"
        textTransform={"uppercase"}
      >
        {heading}
      </Text>
      <Text fontSize="lg" mb={8} align="center">
        {tagline}
      </Text>
      <AspectRatio minW={[250, 450, 600]} ratio={16 / 9}>
        <iframe title="promotion" src={videoLink} allowFullScreen />
      </AspectRatio>
      <Text mt={8} maxW={800} align="center">
        {desc}
      </Text>
    </Flex>
  );
}

export default Promotion;
