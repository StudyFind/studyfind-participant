import {
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { InputField, InputWrapper } from "./helpers";

export const TextInput = ({
  name,
  label,
  value,
  error,
  onChange,
  left,
  leftWidth,
  right,
  rightWidth,
  ...rest
}) => {
  const handleChange = (event) => {
    const value = event.target.value;
    onChange(name, value);
  };

  const adjacentElementStyles = {
    display: "flex",
    alignItems: "center",
    padding: "0px",
    height: "100%",
  };

  const LEFT = left && (
    <InputLeftElement width={leftWidth} {...adjacentElementStyles}>
      {left}
    </InputLeftElement>
  );

  const RIGHT = right && (
    <InputRightElement width={rightWidth} {...adjacentElementStyles}>
      {right}
    </InputRightElement>
  );

  return (
    <InputWrapper label={label} error={error}>
      <InputGroup>
        {LEFT}
        <InputField
          value={value}
          error={error}
          onChange={handleChange}
          paddingLeft={leftWidth}
          paddingRight={rightWidth}
          {...rest}
        />
        {RIGHT}
      </InputGroup>
    </InputWrapper>
  );
};
