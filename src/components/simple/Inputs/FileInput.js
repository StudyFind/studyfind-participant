import { InputField, InputWrapper } from "./helpers";

export const FileInput = ({ name, label, error, onChange, ...rest }) => {
  const handleChange = (event) => {
    const value = event.target.files[0];
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField
        type="file"
        error={error}
        padding="4px !important"
        onChange={handleChange}
        {...rest}
      />
    </InputWrapper>
  );
};
