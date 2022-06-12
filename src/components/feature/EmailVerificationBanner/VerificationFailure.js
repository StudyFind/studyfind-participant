import { FaTimesCircle } from "react-icons/fa";
import AlertBar from "./AlertBar";

function VerificationFailure() {
  return (
    <AlertBar status="error" icon={FaTimesCircle}>
      An error ocurred while sending your verification email. Please try again
      later.
    </AlertBar>
  );
}

export default VerificationFailure;
