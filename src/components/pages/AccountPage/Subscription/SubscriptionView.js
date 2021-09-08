import { datetime } from "utils";

import { Heading, Badge, VStack, HStack, Button, Text } from "@chakra-ui/react";
import { Card } from "components";

function SubscriptionView({ linking, currentPlan, handleManageSubscription }) {
  const planColorScheme = {
    basic: "gray",
    standard: "cyan",
    premium: "green",
  };

  return (
    <Card padding="15px">
      <VStack align="flex-start">
        <Heading size="sm">Current Plan</Heading>
        <Badge colorScheme={planColorScheme[currentPlan]}>{currentPlan}</Badge>
        <Text color="gray.500">
          Your card will be automatically charged <strong>$29</strong> on{" "}
          <strong>{datetime.getFriendlyDate("2021-09-13")}</strong>
        </Text>
        <HStack paddingTop="5px">
          <Button size="sm" onClick={handleManageSubscription} isLoading={linking}>
            Manage Subscription
          </Button>
        </HStack>
      </VStack>
    </Card>
  );
}

export default SubscriptionView;
