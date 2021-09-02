import React from "react";
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

// NEW IMPLEMENTATION

// import { useColor } from "hooks";
// import { Flex, Button, Tooltip } from "@chakra-ui/react";
// import { InputWrapper } from "./helpers";

// export const MultiselectInput = ({
//   name,
//   value,
//   error,
//   label,
//   options,
//   onChange,
//   showValueOnHover = false,
//   size = "md",
// }) => {
//   const handleChange = (option) => {
//     let updated = [];

//     if (value.includes(option.value)) {
//       updated = value.filter((v) => v !== option.value);
//     } else {
//       updated = value.concat(option.value);
//     }

//     onChange(name, updated);
//   };

//   const borderColor = useColor("gray.200", "gray.700");

//   return (
//     <InputWrapper label={label} error={error}>
//       <Flex>
//         {options.map((option, i) => {
//           const isSelected = value.includes(option.value);
//           const firstIndex = 0;
//           const lastIndex = options.length - 1;

//           return (
//             <Tooltip key={i} label={showValueOnHover && option.value}>
//               <Button
//                 size={size}
//                 variant="outline"
//                 marginLeft="-1px"
//                 zIndex={isSelected && "10"}
//                 borderLeftRadius={i !== firstIndex && "0"}
//                 borderRightRadius={i !== lastIndex && "0"}
//                 color={isSelected ? "white" : "gray.500"}
//                 background={isSelected && "blue.500"}
//                 borderColor={isSelected ? "blue.500" : borderColor}
//                 _hover={{ background: isSelected && "blue.500" }}
//                 _active={{ background: isSelected && "blue.500" }}
//                 onClick={() => handleChange(option)}
//               >
//                 {option.label}
//               </Button>
//             </Tooltip>
//           );
//         })}
//       </Flex>
//     </InputWrapper>
//   );
// };
