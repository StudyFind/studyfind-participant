import { VStack, Heading, Icon } from "@chakra-ui/react";

function PricingPlanHeader({ icon, name, color }) {
  return (
    <VStack spacing="24px">
      <Icon as={icon} fontSize="4xl" color={color} />
      <Heading size="lg" fontWeight="bold">
        {name}
      </Heading>
    </VStack>
  );
}

export default PricingPlanHeader;
