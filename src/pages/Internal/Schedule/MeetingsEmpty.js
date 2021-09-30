import { Message } from "components";

function MeetingsEmpty() {
  return (
    <Message
      title="Nothing to see here"
      description="You don't have any meetings on the selected day"
      marginY="10px"
      height="250px"
      showBackground
    />
  );
}

export default MeetingsEmpty;
