import React from "react";

import { useAuthForm } from "hooks";
import { deleteUser } from "database";
import { Form, Heading, Email, Password, Button } from "views/External/Auth/Blocks";
import { Box } from "components";

function ChangePassword() {
  const { inputs, errors, loading, handleInput, handleSubmit } = useAuthForm({
    initial: { email: "", password: "" },
    onSubmit: deleteUser,
  });

  return (
    <Box w="350px" bg="white" borderWidth="1px" borderColor="gray" rounded="md">
      <Form onSubmit={() => handleSubmit(inputs.email, inputs.password)}>
        <Heading color="red.500">Delete Account</Heading>
        <Email value={inputs.email} error={errors.email} onChange={handleInput} />
        <Password value={inputs.password} error={errors.password} onChange={handleInput} />
        <Button loading={loading} colorScheme="red">
          Confirm Delete Account
        </Button>
      </Form>
    </Box>
  );
}

export default ChangePassword;
