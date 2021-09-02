import { useColor } from "hooks";
import { Flex, Grid, Heading, Text, Switch } from "@chakra-ui/react";

export const SwitchInput = ({ name, value, error, label, details, onChange }) => {
  const handleChange = (event) => {
    const value = event.target.checked;
    onChange(name, value);
  };

  const textColor = useColor("gray.500", "gray.400");
  const errorColor = useColor("red.500", "red.400");

  return (
    <Flex
      width="100%"
      gridGap="10px"
      alignItems="flex-start"
      isChecked={value}
      onChange={handleChange}
      borderColor={error && errorColor}
    >
      <Switch isChecked={value} onChange={handleChange} />
      {(label || details || error) && (
        <Grid gap="2px">
          <Heading size="sm">{label}</Heading>
          <Text fontSize="sm" color={textColor}>
            {details}
          </Text>
          <Text fontSize="sm" color={errorColor}>
            {error}
          </Text>
        </Grid>
      )}
    </Flex>
  );
};
