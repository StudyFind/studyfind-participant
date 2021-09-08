import { Select, FormControl } from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const SelectInput = ({
  name,
  value,
  error,
  label,
  placeholder,
  options,
  onChange,
  isDisabled,
  ...rest
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <Select
        bg={error ? "red.100" : "white"}
        textTransform="capitalize"
        placeholder={placeholder}
        isDisabled={isDisabled}
        value={value}
        onChange={handleChange}
        {...rest}
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.label}
          </option>
        ))}
      </Select>
      <Error error={error} />
    </FormControl>
  );
};

// NEW IMPLEMENTATION

// import { Select } from "@chakra-ui/react";
// import { InputField, InputWrapper } from "./helpers";

// export const SelectInput = ({
//   name,
//   label,
//   value,
//   error,
//   options,
//   onChange,
//   ...rest
// }) => {
//   const handleChange = (event) => {
//     const value = event.target.value;
//     onChange(name, value);
//   };

//   return (
//     <InputWrapper label={label} error={error}>
//       <InputField as={Select} value={value} onChange={handleChange} {...rest}>
//         {options.map((option, i) => (
//           <option key={i} value={option.value}>
//             {option.label}
//           </option>
//         ))}
//       </InputField>
//     </InputWrapper>
//   );
// };
