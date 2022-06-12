import { Message } from "components";

function RemindersEmpty() {
  return (
    <Message
      height="100%"
      status="neutral"
      title="Nothing to see"
      description="You do not have any reminders for this study"
    />
  );
}

export default RemindersEmpty;
