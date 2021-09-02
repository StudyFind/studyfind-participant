import { useColor } from "hooks";
import { Text, Icon } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";

export const Disclaimer = ({ colorScheme = "red", children }) => {
  const textColor = useColor(`${colorScheme}.500`, `${colorScheme}.400`);
  const background = useColor(`${colorScheme}.100`, `${colorScheme}.900`);

  return (
    <Text
      color={textColor}
      background={background}
      width="100%"
      padding="10px 15px"
      rounded="md"
      fontSize="sm"
      fontWeight="500"
      textAlign="center"
      borderWidth="1px"
      borderColor={textColor}
    >
      <Icon as={FaExclamationCircle} marginRight="5px" marginBottom="3px" fontSize="12px" />
      {children}
    </Text>
  );
};
