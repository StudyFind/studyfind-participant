import { useState } from "react";
import moment from "moment";

import { toasts } from "templates";
import { auth, firestore } from "database/firebase";

import { Form, TextInput, TextareaInput } from "@studyfind/components";
import { Box, Flex, Grid, Heading, Text, Button, useToast } from "@chakra-ui/react";
import { FaPaperPlane } from "react-icons/fa";

function Feedback() {
  const toast = useToast();

  const [inputs, setInputs] = useState({ title: "", body: "" });
  const [errors, setErrors] = useState({ title: "", body: "" });
  const [loading, setLoading] = useState(false);

  const check = (name, value) => {
    if (!value && name === "title") return "Title cannot be empty";
    if (!value && name === "body") return "Body cannot be empty";
    return "";
  };

  const handleChange = (name, value) => {
    setInputs((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: check(name, value) }));
  };

  const handleCancel = () => {
    setInputs({ title: "", body: "" });
  };

  const handleSubmit = () => {
    const side = "participant";
    const time = moment().utc().valueOf();
    const email = auth.currentUser.email;
    const { title, body } = inputs;

    const err = {
      title: check("title", title),
      body: check("body", body),
    };

    if (err.body || err.title) {
      setErrors(err);
      return;
    }

    setLoading(true);

    firestore
      .collection("feedback")
      .add({ title, body, email, time, side })
      .then(() => {
        toast(toasts.providedFeedback);
        handleCancel();
      })
      .catch(() => {
        toast(toasts.connectionError);
        handleCancel();
      })
      .finally(() => setLoading(false));
  };

  return (
    <Grid gap="20px">
      <Box>
        <Heading size="lg" mb="8px">
          Feedback
        </Heading>
        <Text w="400px" color="gray.500">
          Here is your opportunity to give us feedback about our software. Please elaborate on your
          experiences including which feature of the software you may be referring to. Thank you!
        </Text>
      </Box>
      <Form onSubmit={handleSubmit}>
        <Grid gap="20px" w="400px">
          <TextInput
            label="Title"
            name="title"
            value={inputs.title}
            error={errors.title}
            onChange={handleChange}
          />
          <TextareaInput
            label="Body"
            name="body"
            height="150px"
            value={inputs.body}
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

export default Feedback;