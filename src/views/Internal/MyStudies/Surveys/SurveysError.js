import { Message } from "components";

function SurveysError() {
  return (
    <Message
      status="failure"
      title="Connection Error"
      description="We could not load your surveys"
    />
  );
}

export default SurveysError;
