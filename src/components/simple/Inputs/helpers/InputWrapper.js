import { FormControl, FormLabel, FormErrorMessage } from "@chakra-ui/react";

export const InputWrapper = ({ label, error, children }) => {
  const LABEL = label && <FormLabel>{label}</FormLabel>;
  const ERROR = error && <FormErrorMessage>{error}</FormErrorMessage>;

  return (
    <FormControl isInvalid={error}>
      {LABEL}
      {children}
      {ERROR}
    </FormControl>
  );
};
