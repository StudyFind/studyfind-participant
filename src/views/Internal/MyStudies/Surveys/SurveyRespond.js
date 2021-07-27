import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { auth, storage } from "database/firebase";

import { Flex, Button, Heading, Grid } from "@chakra-ui/react";
import { useArray, useDocument } from "hooks";
import { Form, Loader } from "components";
import { datetime } from "functions";

import Question from "./Question";
import validateForm from "./QuestionErrorHandling";
import SurveysError from "./SurveysError";

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
  const [submitting, setSubmitting] = useState(null);

  const handleChange = (index, value) => {
    if (errors[index]) setErrors.updateItem(undefined, index);
    setResponses.updateItem(value, index);
  };

  const handleFiles = (index, name, file, del) => {
    setFiles((prev) => [...prev, { index, name, file, del }]);
  };

  const handleSubmit = () => {
    validateForm(survey?.questions, responses, setErrors, files);
    const submitTime = datetime.getNow();
    const refPath = `study/${studyID}/surveys/${actionID}/responses/${uid}/`;
    files.forEach((file) => {
      if (file.del) handleChange(file.index, "");
      else handleChange(file.index, `${refPath + file.name + "_" + submitTime}`);
    });
    setSubmitting(submitTime);
  };

  useEffect(() => {
    responseDoc?.responses && setResponses.updateArray(responseDoc.responses);
  }, [responseDoc]);

  useEffect(async () => {
    if (submitting) {
      if (!errors.every((e) => typeof e === "undefined")) {
        setSubmitting(null);
        return;
      }

      const ref = storage.ref(`study/${studyID}/surveys/${actionID}/responses/${uid}/`);

      await Promise.all([
        files.forEach((file) => {
          if (file.del) storage.ref(file.name).delete();
          else ref.child(`${file.name + "_" + submitting}`).put(file.file);
        }),
        surveysRef.doc(actionID).collection("responses").doc(uid).set({
          responses,
          time: submitting,
        }),
      ]);

      setSubmitting(null);
      handleCloseSurvey();
    }
  }, [submitting]);

  if (loading) return <Loader />;
  if (error) return <SurveysError />;

  return (
    <Form onSubmit={handleSubmit} noValidate>
      <Heading p="25px" size="md">
        {survey?.title}
      </Heading>

      <Grid px="25px" gap="20px" mb="100px">
        {survey?.questions?.map((q, i) => (
          <Question
            key={i}
            index={i}
            question={q}
            response={responses[i]}
            error={errors[i]}
            disable={!!submitting}
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
        p="15px"
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
