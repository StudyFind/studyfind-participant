import { Flex, Icon } from "@chakra-ui/react";

function NotificationIcon({ icon, color }) {
  return (
    <Flex w="40px" h="40px" bg={`${color}.100`} justify="center" align="center" rounded="full">
      <Icon as={icon} w="16px" h="16px" color={`${color}.300`} />
    </Flex>
  );
}

export default NotificationIcon;
