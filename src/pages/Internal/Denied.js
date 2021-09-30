import { signout } from "database/auth";

import { Box, Flex, Icon, Text, Button } from "@chakra-ui/react";
import { FaTimesCircle, FaDoorOpen } from "react-icons/fa";
import { useColor } from "hooks";

function Denied({ email }) {
  const iconColor = useColor("red.500", "red.400");

  return (
    <Flex gridGap="16px" direction="column" justify="center" align="center" h="100vh">
      <Icon as={FaTimesCircle} color={iconColor} fontSize="36px" />
      <Box textAlign="center">
        <Text fontSize="24px" fontWeight="600">
          {email}
        </Text>
        <Text>is not associated with a participant account</Text>
      </Box>
      <Button colorScheme="red" rightIcon={<FaDoorOpen />} onClick={signout}>
        Sign out
      </Button>
    </Flex>
  );
}

export default Denied;
