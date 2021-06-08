import { useEffect } from "react";

import { toasts } from "templates";
import { useAuthForm, useConfirm } from "hooks";
import { deleteAccount } from "database/auth";

import { Grid, Button, useToast } from "@chakra-ui/react";
import { Form, TextInput, PasswordInput } from "components";

import AccountHeader from "../AccountHeader";

function DeleteAccount() {
  const toast = useToast();
  const confirm = useConfirm();

  const { input, loading, success, handleSubmit } = useAuthForm({
    initial: { email: "", password: "" },
    onSubmit: deleteAccount,
  });

  const handleOpenConfirm = () => {
    confirm({
      title: "Delete Account",
      description:
        "This action is irreversible and permanent. Are you sure you want to delete your account?",
      color: "red",
      button: "Delete Account Forever",
      handleConfirm: handleSubmit,
    });
  };

  useEffect(() => {
    if (success) {
      toast(toasts.deletedAccount);
    }
  }, [success]);

  return (
    <>
      <AccountHeader
        title="Delete Account"
        description="Deleting your account is a permenant action which will delete all your
        user information and research studies"
      />
      <Form onSubmit={handleOpenConfirm}>
        <Grid gap="15px">
          <TextInput label="Email" {...input("email")} />
          <PasswordInput label="Password" {...input("password")} />
          <Button type="submit" colorScheme="red" isLoading={loading}>
            Delete Account
          </Button>
        </Grid>
      </Form>
    </>
  );
}

export default DeleteAccount;
