import { useAuthForm } from "hooks";
import { toasts } from "templates";

import { Grid, Button } from "@chakra-ui/react";
import { Form, EmailInput, PasswordInput } from "components";

import AccountHeader from "../AccountHeader";

function DeleteAccount({ handleDeleteAccount }) {
  const authForm = useAuthForm({
    initial: { email: "", password: "" },
    toasts: { success: toasts.deletedAccount },
    onSubmit: handleDeleteAccount,
  });

  return (
    <>
      <AccountHeader
        title="Delete Account"
        description="Deleting your account is a permenant action which will delete all your
        user information and research studies"
      />
      <Form onSubmit={authForm.handleSubmit}>
        <Grid gap="15px">
          <EmailInput
            name="email"
            label="Email"
            value={authForm.values.email}
            error={authForm.errors.email}
            onChange={authForm.update}
          />
          <PasswordInput
            name="password"
            label="Password"
            value={authForm.values.password}
            error={authForm.errors.password}
            onChange={authForm.update}
          />
          <Button type="submit" colorScheme="red" isLoading={authForm.loading}>
            Delete Account
          </Button>
        </Grid>
      </Form>
    </>
  );
}

export default DeleteAccount;
