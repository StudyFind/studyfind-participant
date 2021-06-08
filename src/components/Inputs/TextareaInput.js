import { useState, useEffect } from "react";
import { Text, Flex, Textarea, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const TextareaInput = ({
  name,
  value,
  error,
  label,
  placeholder,
  limit,
  onChange,
  ...rest
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (value) {
      setCount(value.length);
    }
  }, [value]);

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <Textarea
        style={{ minHeight: 0 }}
        bg={error ? "red.100" : "white"}
        placeholder={placeholder}
        _placeholder={{ color: error && "gray.500" }}
        value={value}
        onChange={handleChange}
        maxLength={limit}
        {...rest}
      />
      {(limit || error?.trim()) && (
        <Flex justify="space-between" align="center" my="2px">
          <Error mt="0" error={error} />
          {limit && (
            <Text ml="auto" color="gray.500" fontSize="sm">
              {count}/{limit}
            </Text>
          )}
        </Flex>
      )}
    </FormControl>
  );
};

export default TextareaInput;
