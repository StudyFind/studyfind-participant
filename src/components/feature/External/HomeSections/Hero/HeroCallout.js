import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "components";

function HeroCallout({ blackText, blueText, buttonText, buttonLink }) {
  return (
    <VStack spacing="60px" align="flex-start">
      <Heading size="2xl" lineHeight="1.25">
        {blackText}
        <Text color="blue.500">{blueText}</Text>
      </Heading>
      <Link to={buttonLink} isWrapper>
        <Button size="lg" colorScheme="blue">
          {buttonText}
        </Button>
      </Link>
    </VStack>
  );
}

export default HeroCallout;
