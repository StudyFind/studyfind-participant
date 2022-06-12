import { useColor } from "hooks";
import { Flex, Button, Tooltip } from "@chakra-ui/react";
import { InputWrapper } from "./helpers";

export const RadioInput = ({
  name,
  value,
  error,
  label,
  options,
  onChange,
  showValueOnHover = false,
  allowUnselect = false,
  size = "md",
}) => {
  const firstIndex = 0;
  const lastIndex = options.length - 1;

  const handleChange = (option) => {
    if (allowUnselect && option.value === value) {
      onChange(name, "");
    } else {
      onChange(name, option.value);
    }
  };

  const defaultBackground = useColor("gray.200", "gray.700");

  return (
    <InputWrapper label={label} error={error}>
      <Flex>
        {options.map((option, i) => (
          <Tooltip key={i} label={showValueOnHover && option.value}>
            <Button
              key={i}
              size={size}
              variant="outline"
              marginLeft="-1px"
              zIndex={value === option.value && "10"}
              borderLeftRadius={i !== firstIndex && "0"}
              borderRightRadius={i !== lastIndex && "0"}
              borderColor={
                value === option.value ? "blue.500" : defaultBackground
              }
              color={value === option.value ? "white" : "gray.500"}
              background={value === option.value && "blue.500"}
              _hover={{ background: value === option.value && "blue.500" }}
              _active={{ background: value === option.value && "blue.500" }}
              onClick={() => handleChange(option)}
            >
              {option.label}
            </Button>
          </Tooltip>
        ))}
      </Flex>
    </InputWrapper>
  );
};
