import { useHistory } from "hooks";

import { Button } from "@chakra-ui/react";

function PricingPlanButton() {
  const history = useHistory();

  const handleClick = () => {
    localStorage.setItem("redirect", "/account/subscription");
    history.push("/auth");
  };

  return (
    <Button size="lg" width="100%" marginTop="10px" colorScheme="blue" onClick={handleClick}>
      Start Now
    </Button>
  );
}

export default PricingPlanButton;
