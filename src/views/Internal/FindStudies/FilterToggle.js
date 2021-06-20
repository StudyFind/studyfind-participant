import { Button } from "@chakra-ui/react";

function FilterToggle({ children, name, value, onChange }) {
  const color = value ? "blue" : "gray";

  return (
    <Button
      size="sm"
      color={`${color}.500`}
      bg={`${color}.100`}
      borderColor={`${color}.300`}
      borderWidth="1px"
      _hover={{ bg: `${color}.100` }}
      _active={{ bg: `${color}.100` }}
      onClick={() => onChange(name, !value)}
    >
      {children}
    </Button>
  );
}

export default FilterToggle;
