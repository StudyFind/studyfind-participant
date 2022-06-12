import { Box, Flex, Heading, Text } from "@chakra-ui/react";

function PricingPlanPrice({ price, isBilledAnnually, color }) {
  return (
    <Box>
      <Flex
        align="flex-end"
        justify="center"
        fontWeight="extrabold"
        color={color}
      >
        <Heading
          size="xl"
          fontWeight="inherit"
          lineHeight="0.9em"
          marginRight="2px"
        >
          {price[isBilledAnnually ? 1 : 0]}
        </Heading>
        <Text fontWeight="inherit" fontSize="lg">
          / month
        </Text>
      </Flex>
      <Text
        color="gray.500"
        marginTop="4px"
        fontWeight="500"
        textAlign="center"
      >
        billed {isBilledAnnually ? "annually" : "monthly"}
      </Text>
    </Box>
  );
}

export default PricingPlanPrice;
