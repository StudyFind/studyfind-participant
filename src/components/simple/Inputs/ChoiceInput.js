import { SimpleGrid, RadioGroup, Radio } from "@chakra-ui/react";
import { InputWrapper } from "./helpers";

export const ChoiceInput = ({
  name,
  label,
  value,
  error,
  options,
  onChange,
  ...rest
}) => {
  const handleChange = (value) => {
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <RadioGroup value={value} onChange={handleChange} {...rest}>
        <SimpleGrid spacing="4px" alignItems="left" color="gray.500">
          {options.map((option, i) => (
            <Radio key={i} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </SimpleGrid>
      </RadioGroup>
    </InputWrapper>
  );
};
