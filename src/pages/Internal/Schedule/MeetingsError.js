import { Message } from "components";

function MeetingsError() {
  return (
    <Message
      status="failure"
      title="Connection Error"
      description="We were unable to load your meetings. Please check your connection and try again."
      marginY="10px"
      height="250px"
      showBackground
    />
  );
}

export default MeetingsError;
