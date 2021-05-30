import React from "react";

import { useAuthForm } from "hooks";
import { changePassword } from "database/auth";

import {
  AuthForm,
  AuthHeading,
  AuthPassword,
  AuthButton
} from "views/External/Auth/Blocks";
import { Box } from "@chakra-ui/react";
import { Message } from "components";

function ChangePassword() {
  const {
    inputs,
    errors,
    success,
    loading,
    handleChange,
    handleSubmit
  } = useAuthForm({
    initial: { password: "", newPassword: "" },
    onSubmit: changePassword,
  });

  if (success) {
    return (
      <Box p="40px 50px" w="350px" bg="white" borderWidth="1px" rounded="md">
        <Message
          status="success"
          title="Password Changed!"
          description="You can now use your new password to log in"
        />
      </Box>
    );
  }

  return (
    <Box w="350px" bg="white" borderWidth="1px" rounded="md">
      <AuthForm onSubmit={() => handleSubmit(inputs.password, inputs.newPassword)}>
        <AuthHeading>Change Password</AuthHeading>
        <AuthPassword
          value={inputs.password}
          placeholder="Old Password"
          error={errors.password}
          onChange={handleChange}
        />
        <AuthPassword
          name="newPassword"
          placeholder="New Password"
          value={inputs.newPassword}
          error={errors.newPassword}
          onChange={handleChange}
        />
        <AuthButton loading={loading}>
          Confirm Change Password
        </AuthButton>
      </AuthForm>
    </Box>
  );
}

export default ChangePassword;
