import { useState } from "react";
import { useColor } from "hooks";
import { Button } from "@chakra-ui/react";
import { TextInput } from "./TextInput";

export const PasswordInput = ({
  name,
  value,
  error,
  label,
  onChange,
  ...rest
}) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => {
    setShow((prev) => !prev);
  };

  const toggleButtonColor = useColor("gray.500", "gray.400");
  const toggleButtonHoverColor = useColor("blue.500", "blue.400");

  const TOGGLE_BUTTON = (
    <Button
      size="sm"
      color={toggleButtonColor}
      _hover={{ color: toggleButtonHoverColor }}
      _active={{ color: toggleButtonHoverColor }}
      background="transparent"
      onClick={toggleShow}
    >
      {show ? "Hide" : "Show"}
    </Button>
  );

  return (
    <TextInput
      name={name}
      label={label}
      value={value}
      error={error}
      onChange={onChange}
      type={show ? "text" : "password"}
      rightWidth="64px"
      right={TOGGLE_BUTTON}
      {...rest}
    />
  );
};
