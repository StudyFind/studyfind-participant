import { InputField, InputWrapper } from "./helpers";

export const TimeInput = ({ name, value, error, label, onChange, ...rest }) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField
        type="time"
        value={value}
        error={error}
        onChange={handleChange}
        {...rest}
      />
    </InputWrapper>
  );
};
