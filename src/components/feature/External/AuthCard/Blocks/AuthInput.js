import { useColor } from "hooks";

export const AuthInput = ({ as: As, ...rest }) => {
  const background = useColor("white", "gray.900");
  const borderColor = useColor("gray.600", "gray.300");
  return (
    <As
      size="lg"
      border="1px"
      borderColor={borderColor}
      background={background}
      {...rest}
    />
  );
};
