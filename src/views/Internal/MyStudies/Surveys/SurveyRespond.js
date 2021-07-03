import { useEffect } from "react";
import moment from "moment";

import { Flex, Button, Heading, Grid, Text } from "@chakra-ui/react";
import { useArray, useDocument } from "hooks";
import { Form, Loader } from "components";

import Question from "./Question";

function SurveyRespond({ survey, responsesRef, handleCloseSurvey }) {
  const [responseDoc, loading, error] = useDocument(responsesRef.doc(survey.id));
  const init = Array(survey.questions.length);
  const [responses, setResponses] = useArray(init.fill(""));

  const handleChange = (index, value) => {
    setResponses.updateItem(value, index);
  };

  const handleSubmit = async () => {
    await responsesRef.doc(survey.id).set({
      responses,
      time: moment().utc().valueOf(),
    });
    handleCloseSurvey();
  };

  useEffect(() => {
    responseDoc?.responses && setResponses.updateArray(responseDoc.responses);
  }, [responseDoc]);

  if (loading) return <Loader />;
  if (error) return <Text>err</Text>;

  return (
    <Form onSubmit={handleSubmit}>
      <Heading size="md" mb="20px">
        {survey.title}
      </Heading>

      <Grid gap="20px" mb="100px">
        {survey?.questions?.map((q, i) => (
          <Question
            key={i}
            index={i}
            question={q}
            response={responses[i]}
            handleChange={handleChange}
          />
        ))}
      </Grid>

      <Flex
        bg="white"
        width="100%"
        justify="flex-end"
        position="fixed"
        bottom="0"
        borderTopWidth="1px"
        py="15px"
        px="40px"
        gridGap="10px"
      >
        <Button onClick={handleCloseSurvey} color="gray.500" variant="outline">
          Cancel
        </Button>
        <Button type="submit" colorScheme="green">
          Save
        </Button>
      </Flex>
    </Form>
  );
}

export default SurveyRespond;
