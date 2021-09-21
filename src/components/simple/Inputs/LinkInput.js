import { InputWrapper, InputField } from "./helpers";

export const LinkInput = ({ name, label, value, error, onChange, ...rest }) => {
  const handleChange = (event) => {
    const value = event.target.value.replace(/ /g, ""); // remove all whitespace because URLs don't have spaces
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField
        value={value}
        error={error}
        onChange={handleChange}
        {...rest}
      />
    </InputWrapper>
  );
};
