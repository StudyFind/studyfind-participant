import { InputField, InputWrapper } from "./helpers";

export const EmailInput = ({
  name,
  label,
  value,
  error,
  onChange,
  ...rest
}) => {
  const handleChange = (event) => {
    const value = event.target.value.replace(/ /g, ""); // remove all whitespace because emails don't have spaces
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField
        value={value}
        error={error}
        onChange={handleChange}
        autoComplete="email"
        {...rest}
      />
    </InputWrapper>
  );
};
