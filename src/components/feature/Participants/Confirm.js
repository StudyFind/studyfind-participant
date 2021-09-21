import { useColor } from "hooks";
import { Flex, Text, Button } from "@chakra-ui/react";
import { FaCheckCircle } from "react-icons/fa";

function Confirm({ confirmedByParticipant, handleConfirm }) {
  const confirmedColor = useColor("green.500", "green.400");
  const confirmedBackground = useColor("green.100", "green.900");

  return (
    <Flex justify="flex-start" marginTop="16px">
      {confirmedByParticipant ? (
        <Flex
          align="center"
          gridGap="6px"
          paddingX="12px"
          color={confirmedColor}
          background={confirmedBackground}
          rounded="md"
          fontSize="14px"
          fontWeight="600"
          height="32px"
        >
          <FaCheckCircle />
          <Text marginBottom="2px">Confirmed</Text>
        </Flex>
      ) : (
        <Button size="sm" colorScheme="blue" onClick={handleConfirm}>
          Confirm
        </Button>
      )}
    </Flex>
  );
}

export default Confirm;
