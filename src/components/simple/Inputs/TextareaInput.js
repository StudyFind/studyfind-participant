import { useState, useEffect } from "react";
import {
  Text,
  Flex,
  Textarea,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { InputField } from "./helpers";

export const TextareaInput = ({
  name,
  label,
  value,
  error,
  limit,
  onChange,
  ...rest
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(value?.length || 0);
  }, [value]);

  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <FormControl isInvalid={!!error}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputField
        as={Textarea}
        style={{ minHeight: 0 }}
        height="100px"
        value={value}
        error={error}
        onChange={handleChange}
        maxLength={limit}
        {...rest}
      />
      {(limit || error) && (
        <Flex justify="space-between" align="center" marginY="6px">
          {error && <FormErrorMessage marginTop="0">{error}</FormErrorMessage>}
          {limit && (
            <Text marginLeft="auto" color="gray.500" fontSize="sm">
              {count}/{limit}
            </Text>
          )}
        </Flex>
      )}
    </FormControl>
  );
};

export default TextareaInput;
