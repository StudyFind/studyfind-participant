import { useColor } from "hooks";
import { Box } from "@chakra-ui/react";

export const AuthTabLink = ({ children, ...rest }) => {
  const color = useColor("#718096", "gray.500");
  const hoverColor = useColor("blue.500", "blue.400");

  const hoverStyles = {
    color: hoverColor,
    borderBottomColor: hoverColor,
  };

  return (
    <Box
      as="button"
      type="button"
      display="inline-block"
      cursor="pointer"
      margin="auto"
      color="#718096"
      fontSize="0.9rem"
      borderBottomWidth="1px"
      borderBottomStyle="dashed"
      borderBottomColor={color}
      _hover={hoverStyles}
      _focus={hoverStyles}
      {...rest}
    >
      {children}
    </Box>
  );
};

// `
//   all: unset;
//   cursor: pointer;
//   margin: auto;
//   color: #718096;
//   font-size: 0.9rem;
//   border-bottom: 1px dashed grey;

//   &:hover,
//   &:focus {
//     color: rgb(49, 130, 207);
//     border-color: rgb(49, 130, 207);
//     text-decoration: none;
//   }
// `;
