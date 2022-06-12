import { useState } from "react";
import { useColor } from "hooks";

import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  AlertDialog,
  AlertDialogContent,
  AlertDialogOverlay,
} from "@chakra-ui/react";
import { SecondaryButton } from "components/simple/Buttons/SecondaryButton";

function ConfirmModal({
  open,
  title,
  description,
  color,
  button,
  handleClose,
  handleConfirm, // `handleConfirm` needs to be a promise!
}) {
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    setLoading(true);

    return handleConfirm().finally(() => {
      handleClose();
      setLoading(false);
    });
  };

  const textColor = useColor("gray.500", "gray.400");
  const backgroundColor = useColor("white", "gray.800");

  return (
    <AlertDialog
      size="lg"
      motionPreset="scale"
      isCentered
      isOpen={open}
      onClose={!loading && handleClose}
    >
      <AlertDialogOverlay background="rgb(0, 0, 0, 0.75)">
        <AlertDialogContent background={backgroundColor}>
          <Box padding="20px" width="100%">
            <Heading fontSize="lg" marginBottom="8px">
              {title}
            </Heading>
            <Text color={textColor}>{description}</Text>
            <Flex marginTop="24px" gridGap="10px" justify="flex-end">
              <SecondaryButton isDisabled={loading} onClick={handleClose}>
                Cancel
              </SecondaryButton>
              <Button
                colorScheme={color}
                isLoading={loading}
                loadingText={button}
                onClick={handleSubmit}
              >
                {button}
              </Button>
            </Flex>
          </Box>
        </AlertDialogContent>
      </AlertDialogOverlay>
    </AlertDialog>
  );
}

export default ConfirmModal;
