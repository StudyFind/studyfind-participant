import { Input, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const TextInput = ({ name, value, error, label, placeholder, onChange, ...rest }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <Input
        w="100%"
        placeholder={placeholder}
        _placeholder={{ color: error && "gray.500" }}
        bg={error ? "red.100" : ""}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <Error error={error} />
    </FormControl>
  );
};
