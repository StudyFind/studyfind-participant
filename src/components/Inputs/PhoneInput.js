import { Input, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const PhoneInput = ({ name, value, error, label, placeholder, onChange, ...rest }) => {
  const normalizePhone = (value) => {
    const cleaned = value.replace(/\+1/, "").replace(/[^\d]/g, "");

    if (/(\d{3})(\d{3})(\d{1,4})/.exec(cleaned)) {
      return cleaned.replace(/(\d{3})(\d{3})(\d{1,4})/, "+1 ($1) $2-$3").substr(0, 17);
    }

    if (/(\d{3})(\d{1,3})/.exec(cleaned)) {
      return cleaned.replace(/(\d{3})(\d{1,3})/, "+1 ($1) $2");
    }

    if (/(\d{1,3})/.exec(cleaned)) {
      return cleaned.replace(/(\d{1,3})/, "+1 ($1");
    }

    return "";
  };

  const handleChange = (e) => {
    onChange(name, normalizePhone(e.target.value));
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <Input
        w="100%"
        bg={error ? "red.100" : ""}
        placeholder={placeholder || ""}
        _placeholder={{ color: error && "gray.500" }}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <Error error={error} />
    </FormControl>
  );
};
