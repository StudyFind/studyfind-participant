import { useColor } from "hooks";
import { Flex, Button, Tooltip } from "@chakra-ui/react";
import { InputWrapper } from "./helpers";

export const MultiSelectInput = ({
  name,
  value,
  error,
  label,
  options,
  onChange,
  showValueOnHover = false,
  size = "md",
}) => {
  const handleChange = (option) => {
    let updated = [];

    if (value.includes(option.value)) {
      updated = value.filter((v) => v !== option.value);
    } else {
      updated = value.concat(option.value);
    }

    onChange(name, updated);
  };

  const borderColor = useColor("gray.200", "gray.700");

  return (
    <InputWrapper label={label} error={error}>
      <Flex>
        {options.map((option, i) => {
          const isSelected = value.includes(option.value);
          const firstIndex = 0;
          const lastIndex = options.length - 1;

          return (
            <Tooltip key={i} label={showValueOnHover && option.value}>
              <Button
                size={size}
                variant="outline"
                marginLeft="-1px"
                zIndex={isSelected && "10"}
                borderLeftRadius={i !== firstIndex && "0"}
                borderRightRadius={i !== lastIndex && "0"}
                color={isSelected ? "white" : "gray.500"}
                background={isSelected && "blue.500"}
                borderColor={isSelected ? "blue.500" : borderColor}
                _hover={{ background: isSelected && "blue.500" }}
                _active={{ background: isSelected && "blue.500" }}
                onClick={() => handleChange(option)}
              >
                {option.label}
              </Button>
            </Tooltip>
          );
        })}
      </Flex>
    </InputWrapper>
  );
};
