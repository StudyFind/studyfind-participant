import { Message } from "components";

function QuestionsEmpty() {
  return (
    <Message
      status="neutral"
      title="Nothing to see"
      description="You did not have to answer any questions for this research study"
    />
  );
}

export default QuestionsEmpty;
