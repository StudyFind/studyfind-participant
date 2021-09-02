import { Button } from "@chakra-ui/react";
import { Message } from "components";

function LocationsEmpty({ onButtonClick }) {
  return (
    <Message
      title="No Locations"
      description="Locations are used when filtering for users trying to find studies near them and therefore adding locations improves their chances of finding your study"
      height="400px"
      showBackground
    >
      <Button onClick={onButtonClick}>Add Locations</Button>
    </Message>
  );
}

export default LocationsEmpty;
