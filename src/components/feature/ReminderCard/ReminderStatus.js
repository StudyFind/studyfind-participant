import { ConfirmationStatus } from "components";

function ReminderStatus({ confirmed }) {
  const { status, hint, text } = confirmed
    ? {
        status: "success",
        hint: "Confirmed by participant",
        text: "Confirmed",
      }
    : {
        status: "neutral",
        hint: "Waiting for participant to confirm",
        text: "Pending",
      };

  return (
    <ConfirmationStatus status={status} hint={hint}>
      {text}
    </ConfirmationStatus>
  );
}

export default ReminderStatus;
