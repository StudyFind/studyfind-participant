import { Grid, RadioGroup, Radio, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const RadioInput = ({ name, value, error, label, options, onChange, ...rest }) => {
  const handleChange = (value) => {
    onChange(name, value);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <RadioGroup value={value} onChange={handleChange} {...rest}>
        <Grid gap="4px" alignItems="left">
          {options.map((option, i) => (
            <Radio key={i} value={option.value}>
              {option.label}
            </Radio>
          ))}
        </Grid>
      </RadioGroup>
      <Error error={error} />
    </FormControl>
  );
};
