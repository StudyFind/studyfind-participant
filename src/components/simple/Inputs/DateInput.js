import { InputField, InputWrapper } from "./helpers";

export const DateInput = ({ name, label, value, error, onChange, ...rest }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField
        type="date"
        value={value}
        error={error}
        onChange={handleChange}
        {...rest}
      />
    </InputWrapper>
  );
};
