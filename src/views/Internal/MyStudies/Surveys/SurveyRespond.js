import { auth, firestore } from "database/firebase";

import { Flex, Button, Heading, Grid } from "@chakra-ui/react";
import { useArray } from "hooks";
import { Form } from "components";

import Question from "./Question";
import { useParams } from "react-router-dom";

function SurveyRespond({ survey, handleCloseSurvey }) {
  const { studyID, actionID } = useParams();

  const init = new Array(survey.questions.length);
  const [responses, setResponses] = useArray(init.fill(""));

  const handleChange = (index, value) => {
    setResponses.updateItem(value, index);
  };

  const handleSubmit = async () => {
    await firestore
      .collection("studies")
      .doc(studyID)
      .collection("participants")
      .doc(auth.currentUser.uid)
      .collection("surveyResponses")
      .doc(actionID)
      .set({ responses });
    handleCloseSurvey();
  };

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
