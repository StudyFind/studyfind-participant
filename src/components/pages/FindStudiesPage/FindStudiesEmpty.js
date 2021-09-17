import { VStack, Box, Heading, Text } from "@chakra-ui/react";

function FindStudiesEmpty({ verified }) {
  return (
    <VStack height="100%" width="100%" align="flex-start">
      <Box width="500px">
        <Heading size="lg">Find Studies</Heading>
        <Text color="gray.500" marginTop="8px" marginBottom="30px">
          No studies to display. Try changing your search filters for better results!
        </Text>
      </Box>
    </VStack>
  );
}

export default FindStudiesEmpty;
