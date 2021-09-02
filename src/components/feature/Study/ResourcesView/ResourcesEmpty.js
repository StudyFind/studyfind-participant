import { Button } from "@chakra-ui/react";
import { Message } from "components";

function ResourcesEmpty({ onButtonClick }) {
  return (
    <Message
      title="No Resources"
      description="Resources are any useful links relevant to the research study (like marketing material or external surveys) that need to be shared with participants"
      height="400px"
      showBackground
    >
      <Button onClick={onButtonClick}>Add Resources</Button>
    </Message>
  );
}

export default ResourcesEmpty;
