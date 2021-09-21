import { Message } from "components";

function MeetingsEmpty() {
  return (
    <Message
      height="100%"
      status="neutral"
      title="Nothing to see"
      description="You do not have any meetings for this study"
    />
  );
}

export default MeetingsEmpty;
