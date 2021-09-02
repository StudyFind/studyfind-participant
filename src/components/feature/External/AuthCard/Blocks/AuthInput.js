import { useColor } from "hooks";

export const AuthInput = ({ as: As, ...rest }) => {
  const background = useColor("white", "gray.900");
  return <As size="lg" background={background} {...rest} />;
};
