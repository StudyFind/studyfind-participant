import styled from "styled-components";
import {
  Flex,
  Button,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";

function Radio({ name, value, options, onChange, label, error }) {
  return (
    <FormControl isInvalid={error}>
      {label && <FormLabel>{label}</FormLabel>}
      <Options>
        {options.map((o, i) => (
          <Button
            key={i}
            bg={value === o ? "blue.500" : "white"}
            color={value === o ? "white" : "gray.500"}
            fontWeight={value === o ? "500" : "400"}
            colorScheme={value === o ? "blue" : "gray"}
            borderColor={value === o ? "blue.500" : "rgb(226, 232, 240)"}
            borderWidth="1px"
            onClick={() => onChange(name, value === o ? "" : o)}
            _focus={{ zIndex: 100 }}
          >
            {o}
          </Button>
        ))}
      </Options>
      {error && <FormErrorMessage>{error}</FormErrorMessage>}
    </FormControl>
  );
}

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

export default Radio;
