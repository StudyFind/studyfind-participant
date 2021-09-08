import {
  Input,
  FormControl,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { Label, Error } from "./helpers";

export const TextInput = ({
  name,
  value,
  error,
  label,
  placeholder,
  onChange,
  left,
  leftWidth,
  right,
  rightWidth,
  ...rest
}) => {
  const handleChange = (e) => {
    onChange(name, e.target.value);
  };

  return (
    <FormControl isInvalid={!!error}>
      <Label label={label} />
      <InputGroup>
        {left && (
          <InputLeftElement
            w={leftWidth}
            display="flex"
            alignItems="center"
            p="0px"
            h="100%"
          >
            {left}
          </InputLeftElement>
        )}
        <Input
          w="100%"
          placeholder={placeholder}
          _placeholder={{ color: error && "gray.500" }}
          bg={error ? "red.100" : ""}
          value={value}
          onChange={handleChange}
          {...rest}
        />
        {right && (
          <InputRightElement
            w={rightWidth}
            display="flex"
            alignItems="center"
            p="0px"
            h="100%"
          >
            {right}
          </InputRightElement>
        )}
      </InputGroup>
      <Error error={error} />
    </FormControl>
  );
};

// NEW IMPLEMENTATION

// import {
//   InputGroup,
//   InputLeftElement,
//   InputRightElement,
// } from "@chakra-ui/react";
// import { InputField, InputWrapper } from "./helpers";

// export const TextInput = ({
//   name,
//   label,
//   value,
//   error,
//   onChange,
//   left,
//   leftWidth,
//   right,
//   rightWidth,
//   ...rest
// }) => {
//   const handleChange = (event) => {
//     const value = event.target.value;
//     onChange(name, value);
//   };

//   const adjacentElementStyles = {
//     display: "flex",
//     alignItems: "center",
//     padding: "0px",
//     height: "100%",
//   };

//   const LEFT = left && (
//     <InputLeftElement width={leftWidth} {...adjacentElementStyles}>
//       {left}
//     </InputLeftElement>
//   );

//   const RIGHT = right && (
//     <InputRightElement width={rightWidth} {...adjacentElementStyles}>
//       {right}
//     </InputRightElement>
//   );

//   return (
//     <InputWrapper label={label} error={error}>
//       <InputGroup>
//         {LEFT}
//         <InputField
//           value={value}
//           error={error}
//           onChange={handleChange}
//           paddingLeft={leftWidth}
//           paddingRight={rightWidth}
//           {...rest}
//         />
//         {RIGHT}
//       </InputGroup>
//     </InputWrapper>
//   );
// };
