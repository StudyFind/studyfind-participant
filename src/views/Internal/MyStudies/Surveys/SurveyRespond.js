import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { auth, storage } from "database/firebase";

import { Flex, Button, Heading, Grid, Text } from "@chakra-ui/react";
import { useArray, useDocument } from "hooks";
import { Form, Loader } from "components";
import { datetime } from "functions";

import Question from "./Question";
import validateForm from "./QuestionErrorHandling";

function SurveyRespond({ survey, surveysRef, handleCloseSurvey }) {
  const uid = auth.currentUser.uid;
  const { studyID, actionID } = useParams();

  const [responseDoc, loading, error] = useDocument(
    surveysRef.doc(actionID).collection("responses").doc(uid)
  );
  const init = Array(survey?.questions?.length);
  const [responses, setResponses] = useArray(init.fill(""));
  const [files, setFiles] = useState([]);
  const [errors, setErrors] = useArray(Array(survey?.questions?.length));
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (index, value) => {
    setErrors.updateItem(undefined, index);
    setResponses.updateItem(value, index);
  };

  const handleFiles = (index, name, file) => {
    setFiles((prev) => [...prev, { index, name, file }]);
  };

  const generateFileStoragePathAndTime = () => {
    const submitTime = datetime.getNow();
    const refPath = `study/${studyID}/surveys/${actionID}/responses/${uid}/`;

    files.forEach((file) => {
      handleChange(file.index, `${refPath + file.name + "_" + submitTime}`);
    });

    return submitTime;
  };

  const handleSubmit = async () => {
    setSubmitting(true);
    validateForm(survey?.questions, responses, setErrors);
  };

  useEffect(() => {
    responseDoc?.responses && setResponses.updateArray(responseDoc.responses);
  }, [responseDoc]);

  useEffect(async () => {
    if (submitting) {
      if (!errors.every((e) => typeof e === "undefined")) {
        setSubmitting(false);
        return;
      }

      const submitTime = generateFileStoragePathAndTime();

      await Promise.all([
        files.forEach((file) => {
          const ref = storage.ref(responses[file.index]);
          ref.put(file.file);
        }),
        surveysRef.doc(actionID).collection("responses").doc(uid).set({
          responses,
          time: submitTime,
        }),
      ]);

      setSubmitting(false);
      handleCloseSurvey();
    }
  }, [submitting, errors]);

  if (loading) return <Loader />;
  if (error) return <Text>err</Text>; //TODO

  return (
    <Form onSubmit={handleSubmit}>
      <Heading size="md" mb="20px">
        {survey?.title}
      </Heading>

      <Grid gap="20px" mb="100px">
        {survey?.questions?.map((q, i) => (
          <Question
            key={i}
            index={i}
            question={q}
            response={responses[i]}
            error={errors[i]}
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
        <Button isLoading={submitting} type="submit" colorScheme="green">
          Submit
        </Button>
      </Flex>
    </Form>
  );
}

export default SurveyRespond;
