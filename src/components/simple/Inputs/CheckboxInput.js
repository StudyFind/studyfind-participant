import { useColor } from "hooks";
import { Grid, Heading, Text, Checkbox } from "@chakra-ui/react";

export const CheckboxInput = ({
  name,
  value,
  error,
  label,
  details,
  onChange,
}) => {
  const handleChange = (event) => {
    const value = event.target.checked;
    onChange(name, value);
  };

  const textColor = useColor("gray.500", "gray.400");
  const errorColor = useColor("red.500", "red.400");

  return (
    <Checkbox
      size="md"
      width="100%"
      alignItems="flex-start"
      isChecked={value}
      onChange={handleChange}
      borderColor={error && errorColor}
    >
      <Grid gap="2px">
        <Heading size="sm" marginTop="-1px">
          {label}
        </Heading>
        <Text fontSize="sm" color={textColor}>
          {details}
        </Text>
        <Text fontSize="sm" color={errorColor}>
          {error}
        </Text>
      </Grid>
    </Checkbox>
  );
};

export default CheckboxInput;
