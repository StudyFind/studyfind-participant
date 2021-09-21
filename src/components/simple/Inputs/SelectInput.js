import { Select } from "@chakra-ui/react";
import { InputField, InputWrapper } from "./helpers";

export const SelectInput = ({
  name,
  label,
  value,
  error,
  options,
  onChange,
  ...rest
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField as={Select} value={value} onChange={handleChange} {...rest}>
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </InputField>
    </InputWrapper>
  );
};
