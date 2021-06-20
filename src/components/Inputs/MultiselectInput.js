import styled from "styled-components";
import { Flex, Button, Tooltip, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const MultiselectInput = ({ name, value, error, label, options, onChange, ...rest }) => {
  const handleChange = (option) => {
    if (value.includes(option.value)) {
      const updated = value.filter((v) => v !== option.value);
      onChange(name, updated);
      return;
    }

    const updated = value.concat(option.value);
    onChange(name, updated);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <Options>
        {options.map((option, i) => {
          const isSelected = value.includes(option.value);

          return (
            <Tooltip key={i} label={option.value}>
              <Button
                colorScheme={value ? "blue" : "gray"}
                color={isSelected ? "white" : "gray.500"}
                bg={isSelected ? "blue.500" : "white"}
                borderColor={isSelected ? "blue.500" : "rgb(226, 232, 240)"}
                borderWidth="1px"
                onClick={() => handleChange(option)}
                _focus={{ zIndex: 50 }}
                _hover={{ bg: isSelected ? "blue.500" : "gray.200" }}
                _active={{
                  color: isSelected ? "white" : "gray.500",
                  bg: isSelected ? "blue.600" : "gray.300",
                  borderColor: isSelected ? "blue.600" : "gray.300",
                }}
                {...rest}
              >
                {option.label}
              </Button>
            </Tooltip>
          );
        })}
      </Options>
      <Error error={error} />
    </FormControl>
  );
};

const Options = styled(Flex)`
  & > button {
    border-radius: 0;
    margin-left: -1px;
    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }
    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
`;
