import { Card, CheckboxInput } from "components";
import { Heading, HStack, Icon, Text, Flex } from "@chakra-ui/react";
import { Hint } from "components/simple/Hint";
import { FaQuestionCircle } from "react-icons/fa";

function SubscriptionPlan({
  icon,
  name,
  title,
  value,
  price,
  features,
  isBilledAnnually,
  handleSelect,
}) {
  const selectedCardStyle = {
    borderWidth: "2px",
    borderColor: "blue.300",
  };

  const billedPrice = price[isBilledAnnually ? 1 : 0];

  return (
    <Card
      padding="20px"
      cursor="pointer"
      onClick={() => handleSelect(name)}
      width="100%"
      {...(value ? selectedCardStyle : {})}
    >
      <Flex width="100%">
        <HStack spacing="10px">
          <CheckboxInput
            name={name}
            value={value}
            width="auto"
            onChange={() => {}}
          />
          <HStack>
            <Icon as={icon} color="blue.200" />
            <Heading size="md">{title}</Heading>
          </HStack>
        </HStack>
        <HStack spacing="10px" marginLeft="auto">
          <Text color="blue.200" fontWeight="bold">
            {billedPrice} per month
          </Text>
          <Hint
            icon={FaQuestionCircle}
            label={features.join(", ")}
            color="gray.500"
          />
        </HStack>
      </Flex>
    </Card>
  );
}

export default SubscriptionPlan;
