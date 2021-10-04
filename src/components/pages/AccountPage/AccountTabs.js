import { useDetectDevice } from "hooks";
import { Box, Flex, Heading, Button, Divider } from "@chakra-ui/react";
import { FaDoorOpen } from "react-icons/fa";

import VerticalTabs from "components/complex/VerticalTabs/VerticalTabs";

function AccountTabs({ tabs, handleSignout }) {
  const { isPhone } = useDetectDevice();

  return (
    <>
      <Flex
        justify="space-between"
        align="center"
        marginBottom={isPhone && "40px"}
      >
        <Heading size="lg">Account</Heading>
        <Button
          colorScheme="red"
          leftIcon={<FaDoorOpen />}
          onClick={handleSignout}
        >
          Sign out
        </Button>
      </Flex>
      {isPhone || <Divider marginY="30px" />}
      <Box>
        <VerticalTabs tabs={tabs} />
      </Box>
    </>
  );
}

export default AccountTabs;
