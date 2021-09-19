import { List, ListIcon, ListItem, Text, HStack } from "@chakra-ui/react";
import { HiCheckCircle } from "react-icons/hi";

function PricingPlanFeatures({ features, color }) {
  return (
    <List spacing="16px" maxWidth="280px" marginX="auto">
      {features.map((feature, index) => (
        <ListItem fontWeight="medium" key={index}>
          <HStack spacing="0">
            <ListIcon fontSize="xl" as={HiCheckCircle} color={color} />
            <Text>{feature}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}

export default PricingPlanFeatures;
