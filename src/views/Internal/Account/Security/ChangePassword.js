import { useEffect } from "react";

import { toasts } from "templates";
import { useAuthForm } from "hooks";
import { changePassword } from "database/auth";

import { Grid, Button, useToast } from "@chakra-ui/react";
import { Form, PasswordInput } from "components";

import AccountHeader from "../AccountHeader";

function ChangePassword() {
  const toast = useToast();

  const { input, loading, success, handleSubmit } = useAuthForm({
    initial: { password: "", newPassword: "" },
    onSubmit: changePassword,
  });

  useEffect(() => {
    if (success) {
      toast(toasts.changedPassword);
    }
  }, [success]);

  return (
    <>
      <AccountHeader
        title="Change Password"
        description="We recommend using a long password that is unique to your
        StudyFind account"
      />
      <Form onSubmit={handleSubmit}>
        <Grid gap="15px">
          <PasswordInput label="Old Password" {...input("password")} />
          <PasswordInput label="New Password" {...input("newPassword")} />
          <Button type="submit" colorScheme="blue" isLoading={loading}>
            Change Password
          </Button>
        </Grid>
      </Form>
    </>
  );
}

export default ChangePassword;
