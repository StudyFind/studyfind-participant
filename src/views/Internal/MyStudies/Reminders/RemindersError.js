import React from "react";
import { Message } from "components";

function RemindersError() {
  return (
    <Message
      type="failure"
      title="Connection Error"
      description="We could not load your reminders"
    />
  );
}

export default RemindersError;