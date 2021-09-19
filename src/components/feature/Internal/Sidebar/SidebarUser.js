import { Box, Flex, Avatar, Text } from "@chakra-ui/react";

function SidebarUser({ name, email }) {
  return (
    <Box padding="15px">
      <Flex rounded="md" align="flex-start">
        <Avatar
          name={name}
          color="white"
          background="blue.500"
          width="42px"
          height="42px"
          marginRight="10px"
        />
        <Box>
          <Text color="white" fontSize="0.9rem" fontWeight="500" maxWidth="120px" isTruncated>
            {name}
          </Text>
          <Text fontSize="0.9rem" color="gray.400" isTruncated maxWidth="180px">
            {email}
          </Text>
        </Box>
      </Flex>
    </Box>
  );
}
export default SidebarUser;
