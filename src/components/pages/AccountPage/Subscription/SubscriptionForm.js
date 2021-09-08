import { Button, HStack, Text, VStack } from "@chakra-ui/react";
import { SwitchInput } from "components";

import SubscriptionPlan from "./SubscriptionPlan";

function SubscriptionForm({
  plans,
  linking,
  selectedPlan,
  handleSubscribe,
  handleSelectPlan,
  isBilledAnnually,
  handleChangeBilledAnnually,
}) {
  return (
    <VStack align="flex-start" spacing="24px" marginBottom="48px">
      <HStack align="center" fontWeight="500">
        <Text>Billed Monthly</Text>
        <SwitchInput value={isBilledAnnually} onChange={handleChangeBilledAnnually} />
        <Text>Billed Annually</Text>
      </HStack>
      <VStack spacing="10px" paddingY="4px" width="100%">
        {plans.map((plan, i) => (
          <SubscriptionPlan
            key={i}
            icon={plan.icon}
            name={plan.name}
            title={plan.title}
            price={plan.price}
            value={plan.name === selectedPlan}
            features={plan.features}
            isBilledAnnually={isBilledAnnually}
            handleSelect={handleSelectPlan}
          />
        ))}
      </VStack>
      <HStack width="100%" justify="flex-end">
        <Button colorScheme="green" onClick={handleSubscribe} isLoading={linking}>
          Continue
        </Button>
      </HStack>
    </VStack>
  );
}

export default SubscriptionForm;
