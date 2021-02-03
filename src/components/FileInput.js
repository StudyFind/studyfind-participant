import React from "react";
import { Input, FormControl, FormErrorMessage, Progress } from "@chakra-ui/react";

function FileInput({ loading, status, error, accept, onChange }) {
  const LOADING = <Progress hasStripe value={status} colorScheme="blue" />;

  const DEFAULT = (
    <FormControl isInvalid={error}>
      <Input
        type="file"
        p="4px !important"
        onChange={onChange}
        isInvalid={error}
        accept={accept}
        bg="white"
      />
      <FormErrorMessage>{error}</FormErrorMessage>
    </FormControl>
  );

  return loading ? LOADING : DEFAULT;
}

export default FileInput;
