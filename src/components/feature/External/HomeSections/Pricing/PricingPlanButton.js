import { Button } from "@chakra-ui/react";
import { Link } from "components";

function PricingPlanButton() {
  return (
    <Link to="/auth">
      <Button size="lg" width="100%" marginTop="10px" colorScheme="blue">
        Start Now
      </Button>
    </Link>
  );
}

export default PricingPlanButton;
