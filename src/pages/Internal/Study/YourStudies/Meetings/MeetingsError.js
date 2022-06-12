import { Message } from "components";

function MeetingsError() {
  return (
    <Message
      status="failure"
      title="Connection Error"
      description="We could not load your meetings"
    />
  );
}

export default MeetingsError;
