import { Flex, Button } from "@chakra-ui/react";

function WizardFormButton({
  isFirstStep,
  isFinalStep,
  loading,
  handleBack,
  handleNext,
  handleSubmit,
}) {
  return (
    <Flex justify="flex-end" marginTop="20px" gridGap="10px">
      {!isFirstStep && (
        <Button color="gray.500" variant="outline" onClick={handleBack}>
          Back
        </Button>
      )}
      <Button
        type="submit"
        colorScheme="blue"
        onClick={isFinalStep ? handleSubmit : handleNext}
        isLoading={loading}
      >
        {isFinalStep ? "Done" : "Next"}
      </Button>
    </Flex>
  );
}

export default WizardFormButton;
