import { useColor } from "hooks";
import { VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link } from "components";

function Panel({ colorScheme, title, description, buttonText, buttonLink }) {
  const headingColor = useColor(`${colorScheme}.700`, `${colorScheme}.200`);
  const backgroundColor = useColor(`${colorScheme}.100`, `${colorScheme}.700`);

  return (
    <VStack
      align="flex-start"
      spacing="25px"
      padding="30px"
      maxWidth="360px"
      borderRadius="10px"
      background={backgroundColor}
    >
      <VStack align="flex-start" spacing="10px">
        <Heading color={headingColor} size="lg" fontWeight="700">
          {title}
        </Heading>
        <Text>{description}</Text>
      </VStack>
      <Link to={buttonLink} isWrapper>
        <Button colorScheme={colorScheme} fontWeight="bold">
          {buttonText}
        </Button>
      </Link>
    </VStack>
  );
}

export default Panel;
