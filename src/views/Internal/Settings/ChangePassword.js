import React from "react";

import { useAuthForm } from "hooks";
import { changePassword } from "database/auth";

import { Form, Heading, Password, Button } from "views/External/Auth/Blocks";
import { Box } from "@chakra-ui/react";
import { Message } from "components";

function ChangePassword() {
  const { inputs, errors, success, loading, handleChange, handleSubmit } = useAuthForm({
    initial: { password: "", newPassword: "" },
    onSubmit: changePassword,
  });

  if (success) {
    return (
      <Box p="40px 50px" w="350px" bg="white" borderWidth="1px" rounded="md">
        <Message
          type="success"
          title="Password Changed!"
          description="You can now use your new password to log in"
        />
      </Box>
    );
  }

  return (
    <Box w="350px" bg="white" borderWidth="1px" rounded="md">
      <Form onSubmit={() => handleSubmit(inputs.password, inputs.newPassword)}>
        <Heading>Change Password</Heading>
        <Password
          value={inputs.password}
          placeholder="Old Password"
          error={errors.password}
          onChange={handleChange}
        />
        <Password
          name="newPassword"
          placeholder="New Password"
          value={inputs.newPassword}
          error={errors.newPassword}
          onChange={handleChange}
        />
        <Button loading={loading}>Confirm Change Password</Button>
      </Form>
    </Box>
  );
}

export default ChangePassword;
