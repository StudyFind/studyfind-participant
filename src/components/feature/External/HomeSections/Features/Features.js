import { useColor, useDetectDevice } from "hooks";
import { SimpleGrid } from "@chakra-ui/react";

import SectionWrapper from "../SectionWrapper";
import Feature from "./Feature";

function Features({ features }) {
  const background = useColor("gray.100", "gray.800");

  const { isPhone } = useDetectDevice();

  return (
    <SectionWrapper background={background}>
      <SimpleGrid columns={isPhone ? 1 : 2} spacing="80px 60px">
        {features.map((feature, i) => (
          <Feature
            key={i}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </SimpleGrid>
    </SectionWrapper>
  );
}

export default Features;
