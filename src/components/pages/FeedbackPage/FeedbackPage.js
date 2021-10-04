import { useTriggerToast, useFeedbackInputs } from "hooks";
import { feedback } from "database/mutations";
import { toasts } from "templates";

import { Form, TextInput, TextareaInput } from "components";
import { Box, Flex, Grid, Heading, Text, Button } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

function FeedbackPage() {
  const triggerToast = useTriggerToast();

  const onSubmit = ({ title, body }) => {
    return feedback
      .submit({ title, body })
      .then(() => triggerToast(toasts.providedFeedback));
  };

  const { values, errors, loading, handleChange, handleSubmit } =
    useFeedbackInputs(onSubmit);

  return (
    <Grid gap="20px">
      <Box>
        <Heading size="lg" marginBottom="8px">
          Feedback
        </Heading>
        <Text maxWidth="400px" color="gray.500">
          Here is your opportunity to give us feedback about our software.
          Please elaborate on your experiences, including which feature of the
          software you may be referring to. Thank you!
        </Text>
      </Box>
      <Form onSubmit={handleSubmit}>
        <Grid gap="20px" maxWidth="400px">
          <TextInput
            label="Title"
            name="title"
            value={values.title}
            error={errors.title}
            onChange={handleChange}
          />
          <TextareaInput
            label="Body"
            name="body"
            height="150px"
            value={values.body}
            error={errors.body}
            onChange={handleChange}
          />
          <Flex justify="flex-end">
            <Button
              type="submit"
              colorScheme="blue"
              rightIcon={<FaPaperPlane />}
              isLoading={loading}
              loadingText="Sending..."
            >
              Send Feedback
            </Button>
          </Flex>
        </Grid>
      </Form>
    </Grid>
  );
}

export default FeedbackPage;
