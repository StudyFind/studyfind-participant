import { useAuthForm } from "hooks";
import { toasts } from "templates";

import { Grid, Button } from "@chakra-ui/react";
import { Form, PasswordInput } from "components";

import AccountHeader from "../AccountHeader";

function ChangePassword({ handleChangePassword }) {
  const authForm = useAuthForm({
    initial: { password: "", newPassword: "" },
    toasts: { success: toasts.changedPassword },
    onSubmit: handleChangePassword,
  });

  return (
    <>
      <AccountHeader
        title="Change Password"
        description="We recommend using a long password that is unique to your
        StudyFind account"
      />
      <Form onSubmit={authForm.submit}>
        <Grid gap="15px">
          <PasswordInput
            name="password"
            label="Old Password"
            value={authForm.values.password}
            error={authForm.errors.password}
            onChange={authForm.update}
          />
          <PasswordInput
            name="newPassword"
            label="New Password"
            value={authForm.values.newPassword}
            error={authForm.errors.newPassword}
            onChange={authForm.update}
          />
          <Button type="submit" colorScheme="blue" isLoading={authForm.loading}>
            Change Password
          </Button>
        </Grid>
      </Form>
    </>
  );
}

export default ChangePassword;
