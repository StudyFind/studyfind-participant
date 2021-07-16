import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { auth, storage } from "database/firebase";
import moment from "moment";

import { Flex, Button, Heading, Grid, Text } from "@chakra-ui/react";
import { useArray, useDocument } from "hooks";
import { Form, Loader } from "components";

import Question from "./Question";

function SurveyRespond({ survey, responsesRef, handleCloseSurvey }) {
  const uid = auth.currentUser.uid;
  const { studyID, actionID } = useParams();

  const [responseDoc, loading, error] = useDocument(responsesRef.doc(survey.id));
  const [responses, setResponses] = useArray(Array(survey.questions.length));

  const [files, setFiles] = useState([]);

  const handleChange = (index, value) => {
    setResponses.updateItem(value, index);
  };

  const handleFiles = (index, name, file) => {
    setFiles((prev) => [...prev, { index, name, file }]);
  };

  const handleSubmit = async () => {
    const submitTime = moment().utc().valueOf();
    const refPath = `study/${studyID}/participants/${uid}/surveyResponses/${actionID}/`;

    files.forEach((file) => {
      handleChange(file.index, `${refPath + file.name + "_" + submitTime}`);
    });

    await Promise.all([
      files.forEach((file) => {
        const ref = storage.ref(responses[file.index]);
        ref.put(file.file);
      }),
      responsesRef.doc(survey.id).set({
        responses,
        time: submitTime,
      }),
    ]);

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
            handleFiles={handleFiles}
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
