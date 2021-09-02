import React from "react";
import { TextInput, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const DateInput = ({ name, value, error, label, onChange, ...rest }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={error}>
      <Label label={label} />
      <TextInput
        type="date"
        w="100%"
        bg={error ? "red.100" : ""}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <Error error={error} />
    </FormControl>
  );
};

// NEW IMPLEMENTATION

// import { InputField, InputWrapper } from "./helpers";

// export const DateInput = ({ name, label, value, error, onChange, ...rest }) => {
//   const handleChange = (event) => {
//     const value = event.target.value;
//     onChange(name, value);
//   };

//   return (
//     <InputWrapper label={label} error={error}>
//       <InputField
//         type="date"
//         value={value}
//         error={error}
//         onChange={handleChange}
//         {...rest}
//       />
//     </InputWrapper>
//   );
// };
