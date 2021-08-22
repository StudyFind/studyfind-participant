import React from "react";
import { Flex, Text, Spinner } from "@chakra-ui/react";

export const Loader = ({ text }) => (
  <Flex gridGap="10px" justify="center" align="center" h="100%" w="100%">
    <Spinner emptyColor="gray.200" color="blue.500" thickness="4px" speed="0.5s" size="lg" />
    <Text fontSize="lg" fontWeight="500">
      {text}
    </Text>
  </Flex>
);
