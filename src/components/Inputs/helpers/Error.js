import lodash from "lodash";
import { FormErrorMessage } from "@chakra-ui/react";

export const Error = ({ error, ...rest }) => {
  return error && lodash.isString(error) && error.trim() ? (
    <FormErrorMessage {...rest}>{error}</FormErrorMessage>
  ) : null;
};
