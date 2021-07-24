import React from "react";
import { Select, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const SelectInput = ({
  name,
  value,
  error,
  label,
  placeholder,
  options,
  onChange,
  isDisabled,
  ...rest
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <Select
        bg={error ? "red.100" : "white"}
        textTransform="capitalize"
        placeholder={placeholder}
        isDisabled={isDisabled}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Error error={error} />
    </FormControl>
  );
};
