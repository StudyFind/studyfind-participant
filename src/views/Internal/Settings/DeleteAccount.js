import React from "react";

import { useAuthForm } from "hooks";
import { deleteUser } from "database/auth";

import { AuthForm, AuthHeading, AuthEmail, AuthPassword, AuthButton } from "views/External/Auth/Blocks";
import { Box } from "@chakra-ui/react";

function DeleteAccount() {
  const { inputs, errors, loading, handleChange, handleSubmit } = useAuthForm({
    initial: { email: "", password: "" },
    onSubmit: deleteUser,
  });

  return (
    <Box w="350px" bg="white" borderWidth="1px" rounded="md">
      <AuthForm onSubmit={() => handleSubmit(inputs.email, inputs.password)}>
        <AuthHeading color="red.500">Delete Account</AuthHeading>
        <AuthEmail
          value={inputs.email}
          error={errors.email}
          onChange={handleChange}
        />
        <AuthPassword
          value={inputs.password}
          error={errors.password}
          onChange={handleChange}
        />
        <AuthButton loading={loading} colorScheme="red">
          Confirm Delete Account
        </AuthButton>
      </AuthForm>
    </Box>
  );
}

export default DeleteAccount;
