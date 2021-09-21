import { Heading, HStack, Text, VStack } from "@chakra-ui/react";
import { SwitchInput } from "components/simple/Inputs/SwitchInput";
import { useDetectDevice } from "hooks";

function PricingHeader({ title, description, isBilledAnnually, handleChange }) {
  const { isPhone } = useDetectDevice();

  return (
    <VStack align="flex-start" spacing="24px" marginBottom="48px">
      <VStack align="flex-start" spacing="15px">
        <Heading fontWeight="900">{title}</Heading>
        <Text color="gray.500" width={isPhone ? "100%" : "450px"}>
          {description}
        </Text>
      </VStack>
      <HStack align="center" fontWeight="500">
        <Text>Monthly</Text>
        <SwitchInput isChecked={isBilledAnnually} onChange={handleChange} />
        <Text>Annually</Text>
      </HStack>
    </VStack>
  );
}

export default PricingHeader;
