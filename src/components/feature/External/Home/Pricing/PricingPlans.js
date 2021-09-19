import { SimpleGrid } from "@chakra-ui/react";
import { useDetectDevice } from "hooks";
import PricingPlan from "./PricingPlan";

function PricingPlans({ plans, isBilledAnnually }) {
  const { responsive } = useDetectDevice();

  return (
    <SimpleGrid gap="30px" width="100%" columns={responsive([1, 2, 3])}>
      {plans.map((plan, i) => (
        <PricingPlan
          key={i}
          name={plan.name}
          icon={plan.icon}
          price={plan.price}
          features={plan.features}
          isPopular={plan.isPopular}
          isBilledAnnually={isBilledAnnually}
        />
      ))}
    </SimpleGrid>
  );
}

export default PricingPlans;
