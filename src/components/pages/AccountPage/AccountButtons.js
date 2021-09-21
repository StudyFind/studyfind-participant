import { Flex, Button } from "@chakra-ui/react";
import { SecondaryButton } from "components";

function AccountButtons({ loading, handleCancel, handleUpdate }) {
  return (
    <Flex gridGap="10px" justify="flex-end">
      <SecondaryButton isDisabled={loading} onClick={handleCancel}>
        Cancel
      </SecondaryButton>
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
