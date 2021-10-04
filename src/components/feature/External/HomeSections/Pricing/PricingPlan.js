import { useColor } from "hooks";
import { Flex } from "@chakra-ui/react";

import PricingPlanBadge from "./PricingPlanBadge";
import PricingPlanHeader from "./PricingPlanHeader";
import PricingPlanPrice from "./PricingPlanPrice";
import PricingPlanFeatures from "./PricingPlanFeatures";
import PricingPlanButton from "./PricingPlanButton";

function PricingPlan({
  icon,
  name,
  price,
  features,
  isPopular,
  isBilledAnnually,
}) {
  const background = useColor("white", "gray.900");
  const accentColor = useColor("blue.600", "blue.400");
  const borderColor = useColor("gray.200", "gray.700");

  return (
    <Flex
      gridGap="24px"
      padding="24px"
      paddingTop="48px"
      position="relative"
      overflow="hidden"
      shadow="lg"
      direction="column"
      rounded="xl"
      borderWidth="1px"
      background={background}
      borderColor={borderColor}
    >
      {isPopular && <PricingPlanBadge>Popular</PricingPlanBadge>}
      <PricingPlanHeader icon={icon} name={name} color={accentColor} />
      <PricingPlanPrice
        price={price}
        isBilledAnnually={isBilledAnnually}
        color={accentColor}
      />
      <PricingPlanFeatures features={features} color={accentColor} />
      <PricingPlanButton />
    </Flex>
  );
}

export default PricingPlan;
