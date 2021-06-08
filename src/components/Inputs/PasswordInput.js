import { useState } from "react";
import { FormControl, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const PasswordInput = ({ name, value, error, label, placeholder, onChange, ...rest }) => {
  const [show, setShow] = useState(false);

  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <InputGroup>
        <Input
          name={name}
          type={show ? "text" : "password"}
          value={value}
          error={error}
          label={label}
          onChange={handleChange}
          bg={error ? "red.100" : "white"}
          placeholder={placeholder}
          _placeholder={{ color: error && "gray.500" }}
          pr="60px"
          {...rest}
        />
        <InputRightElement w="60px" h="100%">
          <Button
            variant="outline"
            borderWidth="0"
            color="gray.500"
            size="sm"
            _hover={{ bg: "transparent", color: "blue.500" }}
            _active={{ bg: "transparent", color: "blue.500" }}
            onClick={() => setShow((prev) => !prev)}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Error error={error} />
    </FormControl>
  );
};
