import React, { useEffect } from "react";

import { useAuthForm } from "hooks";
import { changePassword } from "database/auth";

import { Grid, Button, useToast } from "@chakra-ui/react";
import { Form } from "components";

import PasswordInput from "./PasswordInput";
import AccountHeader from "../AccountHeader";

function ChangePassword() {
  const toast = useToast();

  const { inputs, errors, success, loading, handleChange, handleSubmit } = useAuthForm({
    initial: { password: "", newPassword: "" },
    onSubmit: changePassword,
  });

  useEffect(() => {
    if (success) {
      toast({
        title: "Password Changed!",
        description: "You can now use your new password to log in",
        status: "success",
        duration: 5000,
        isClosable: true,
        position: "top",
      });
    }
  }, [success]);

  return (
    <>
      <AccountHeader
        title="Change Password"
        description="We recommend using a long password that is unique to your
        StudyFind account"
      />
      <Form onSubmit={() => handleSubmit(inputs.password, inputs.newPassword)}>
        <Grid gap="15px">
          <PasswordInput
            name="password"
            label="Old Password"
            value={inputs.password}
            error={errors.password}
            onChange={handleChange}
          />
          <PasswordInput
            name="newPassword"
            label="New Password"
            value={inputs.newPassword}
            error={errors.newPassword}
            onChange={handleChange}
          />
          <Button type="submit" colorScheme="blue" isLoading={loading}>
            Change Password
          </Button>
        </Grid>
      </Form>
    </>
  );
}

export default ChangePassword;
