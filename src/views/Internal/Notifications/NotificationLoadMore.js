import { Flex, Text, Button } from "@chakra-ui/react";

function NotificationLoadMore({ fetchedAll, additionalLoading, handleFetchAdditional }) {
  return (
    <Flex p="20px" justify="center">
      {fetchedAll ? (
        <Text color="gray.400">Showing all notifications</Text>
      ) : (
        <Button
          bg="white"
          size="sm"
          variant="outline"
          color="gray.500"
          isLoading={additionalLoading}
          onClick={handleFetchAdditional}
        >
          Load more
        </Button>
      )}
    </Flex>
  );
}

export default NotificationLoadMore;
