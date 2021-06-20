import {
  Input,
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const TextInput = ({
  name,
  value,
  error,
  label,
  placeholder,
  onChange,
  left,
  leftWidth,
  right,
  rightWidth,
  ...rest
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <InputGroup>
        {left && (
          <InputLeftElement w={leftWidth} display="flex" alignItems="center" p="0px" h="100%">
            {left}
          </InputLeftElement>
        )}
        <Input
          w="100%"
          placeholder={placeholder}
          _placeholder={{ color: error && "gray.500" }}
          bg={error ? "red.100" : ""}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {right && (
          <InputRightElement w={rightWidth} display="flex" alignItems="center" p="0px" h="100%">
            {right}
          </InputRightElement>
        )}
      </InputGroup>
      <Error error={error} />
    </FormControl>
  );
};
