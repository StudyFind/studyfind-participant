import { useState } from "react";
import { useColor } from "hooks";

import PricingHeader from "./PricingHeader";
import PricingPlans from "./PricingPlans";
import SectionWrapper from "../SectionWrapper";

function Pricing({ title, description, plans }) {
  const [isBilledAnnually, setIsBilledAnnually] = useState(true);

  const handleChange = (_, value) => {
    setIsBilledAnnually(value);
  };

  const background = useColor("gray.100", "gray.800");

  return (
    <SectionWrapper background={background} align="flex-start">
      <PricingHeader
        title={title}
        description={description}
        isBilledAnnually={isBilledAnnually}
        handleChange={handleChange}
      />
      <PricingPlans plans={plans} isBilledAnnually={isBilledAnnually} />
    </SectionWrapper>
  );
}

export default Pricing;
