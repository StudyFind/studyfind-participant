import { useState } from "react";
import { useDetectDevice, useTriggerToast } from "hooks";
import { toasts } from "templates";

import { Grid } from "@chakra-ui/react";

import AccountButtons from "./AccountButtons";

function AccountWrapper({ children, showButtons, handleCancel, handleUpdate }) {
  const [loading, setLoading] = useState(false);
  const triggerToast = useTriggerToast();

  const handleSubmit = () => {
    setLoading(true);

    return handleUpdate()
      .then(() => triggerToast(toasts.updatedAccount))
      .catch(() => triggerToast(toasts.connectionError))
      .finally(() => setLoading(false));
  };

  const { isPhone } = useDetectDevice();

  return (
    <Grid
      gap="30px"
      marginLeft={isPhone ? "0" : "40px"}
      marginTop={isPhone ? "40px" : "0"}
      maxWidth="400px"
    >
      {children}
      {showButtons && (
        <AccountButtons loading={loading} handleCancel={handleCancel} handleUpdate={handleSubmit} />
      )}
    </Grid>
  );
}

export default AccountWrapper;
