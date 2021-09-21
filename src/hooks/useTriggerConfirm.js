// returns function that triggers confirm modal
// const triggerConfirm = useTriggerConfirm();
import { useContext } from "react";
import { ConfirmContext } from "context";

function useTriggerConfirm() {
  return useContext(ConfirmContext);
}

export default useTriggerConfirm;
