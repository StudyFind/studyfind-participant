import { InputField, InputWrapper } from "./helpers";

export const PhoneInput = ({
  name,
  value,
  error,
  label,
  onChange,
  ...rest
}) => {
  const normalizePhone = (value) => {
    const cleaned = value.replace(/\+1/, "").replace(/[^\d]/g, "");

    if (/(\d{3})(\d{3})(\d{1,4})/.exec(cleaned)) {
      return cleaned
        .replace(/(\d{3})(\d{3})(\d{1,4})/, "+1 ($1) $2-$3")
        .substr(0, 17);
    }

    if (/(\d{3})(\d{1,3})/.exec(cleaned)) {
      return cleaned.replace(/(\d{3})(\d{1,3})/, "+1 ($1) $2");
    }

    if (/(\d{1,3})/.exec(cleaned)) {
      return cleaned.replace(/(\d{1,3})/, "+1 ($1");
    }

    return "";
  };

  const handleChange = (event) => {
    const value = normalizePhone(event.target.value);
    onChange(name, value);
  };

  return (
    <InputWrapper label={label} error={error}>
      <InputField
        value={value}
        error={error}
        onChange={handleChange}
        autoComplete="phone"
        {...rest}
      />
    </InputWrapper>
  );
};
