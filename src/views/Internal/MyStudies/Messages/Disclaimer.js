import { Text, Icon } from "@chakra-ui/react";
import { FaExclamationCircle } from "react-icons/fa";

function Disclaimer() {
  return (
    <Text
      w="70%"
      p="10px 15px"
      color="red.500"
      bg="red.100"
      rounded="md"
      fontSize="sm"
      fontWeight="500"
      textAlign="center"
      borderWidth="1px"
      borderColor="red.500"
    >
      <Icon as={FaExclamationCircle} mr="5px" mb="3px" fontSize="12px" />
      Messages are not end-to-end encrypted. Please avoid sharing personal health information
      through this chat.
    </Text>
  );
}

export default Disclaimer;
