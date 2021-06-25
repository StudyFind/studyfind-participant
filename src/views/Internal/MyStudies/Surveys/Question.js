import { useState } from "react";

import { Text, Box, Flex } from "@chakra-ui/react";
import { TextareaInput } from "components/Inputs/TextareaInput";

function Question({ index, question, handleChange }) {
  const responseFormats = {
    "short answer": "",
    "long answer": "",
    "multiple choice": null,
    checkboxes: null, //TODO
    dropdown: null,
    number: null,
    email: "",
    phone: "",
    file: "",
    link: "",
    date: "",
    time: null,
  };

  const [response, setResponse] = useState(responseFormats[question.type]);

  return (
    <Box borderWidth="1px" bg="white" rounded="md" p="15px">
      <Flex justify="space-between">
        <Text fontSize="xs" color="gray.500">
          {"Question " + (index + 1)}
        </Text>
        {question?.constraints?.required && (
          <Text align="flex-end" fontSize="xs" as="i" color="gray.500">
            required
          </Text>
        )}
      </Flex>
      <Text>{question.prompt}</Text>
      {["short answer", "long answer"].includes(question.type) && (
        <TextareaInput name="response" label="Response" value={response} />
      )}
    </Box>
  );
}

export default Question;
