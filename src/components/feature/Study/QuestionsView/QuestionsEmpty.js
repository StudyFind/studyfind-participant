import { Button } from "@chakra-ui/react";
import { Message } from "components";

function QuestionsEmpty({ onButtonClick }) {
  return (
    <Message
      title="No Questions"
      description="Questions are used to screen participants when signing up for your study and automatically assigns them an eligibility score based on their responses"
      height="400px"
      showBackground
    >
      <Button onClick={onButtonClick}>Add Questions</Button>
    </Message>
  );
}

export default QuestionsEmpty;
