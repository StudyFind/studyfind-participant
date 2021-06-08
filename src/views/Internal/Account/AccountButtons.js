import { Flex, Button } from "@chakra-ui/react";

function AccountButtons({ loading, handleCancel, handleUpdate }) {
  return (
    <Flex gridGap="10px" justify="flex-end">
      <Button variant="outline" color="gray.500" isDisabled={loading} onClick={handleCancel}>
        Cancel
      </Button>
      <Button
        colorScheme="green"
        loadingText="Save Changes"
        isLoading={loading}
        onClick={handleUpdate}
      >
        Save Changes
      </Button>
    </Flex>
  );
}

export default AccountButtons;
