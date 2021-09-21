import { useColor } from "hooks";
import { Input } from "@chakra-ui/react";

export const InputField = ({ as, error, ...rest }) => {
  const errorPlaceholderColor = useColor("red.400", "red.400");
  const errorBackground = useColor("red.100", "red.800");
  const borderColor = useColor("gray.200", "gray.700");
  const backgroundColor = useColor("white", "gray.900");
  const hoverBorderColor = useColor("gray.300", "gray.600");
  const placeholderColor = useColor("gray.400", "gray.500");

  const errorStyles = {
    background: errorBackground,
    _placeholder: { color: errorPlaceholderColor },
  };

  const Field = as || Input;

  return (
    <Field
      width="100%"
      autoComplete="off"
      borderColor={borderColor}
      background={backgroundColor}
      _placeholder={{ color: placeholderColor }}
      _hover={{ borderColor: hoverBorderColor }}
      {...rest}
      {...(error ? errorStyles : {})}
    />
  );
};
