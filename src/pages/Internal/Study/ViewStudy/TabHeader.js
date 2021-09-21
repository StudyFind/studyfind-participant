import { Heading, HStack } from "@chakra-ui/react";

function TabHeader({ heading, children }) {
  return (
    <HStack justify="space-between" align="center" marginBottom="20px">
      <Heading size="lg">{heading}</Heading>
      <HStack spacing="10px" align="center">
        {children}
      </HStack>
    </HStack>
  );
}

export default TabHeader;
