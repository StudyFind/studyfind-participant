import React from "react";
import { Input, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const LinkInput = ({ name, value, error, label, placeholder, onChange, ...rest }) => {
  const handleChange = (e) => {
    onChange(name, e.target.value.trim());
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <Input
        w="100%"
        type="url"
        placeholder={placeholder}
        _placeholder={{ color: error && "gray.500" }}
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

// import { InputWrapper, InputField } from "./helpers";

// export const LinkInput = ({ name, label, value, error, onChange, ...rest }) => {
//   const handleChange = (event) => {
//     const value = event.target.value.replace(/ /g, ""); // remove all whitespace because URLs don't have spaces
//     onChange(name, value);
//   };

//   return (
//     <InputWrapper label={label} error={error}>
//       <InputField
//         value={value}
//         error={error}
//         onChange={handleChange}
//         {...rest}
//       />
//     </InputWrapper>
//   );
// };
