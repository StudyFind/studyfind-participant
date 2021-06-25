import { useState } from "react";

import { Flex, Button, Heading, Grid } from "@chakra-ui/react";
import { Form } from "components";

import Question from "./Question";

function SurveyRespond({ survey, handleCloseSurvey }) {
  const init = new Array(survey.questions.length);
  const [responses, setResponses] = useState(init.fill(null));

  const handleChange = (index, value) => {
    let res = [...responses];
    res[index] = value;
    setResponses(res);
  };

  return (
    <Form onSubmit={() => console.log(survey.questions)}>
      <Heading size="md" mb="20px">
        {survey.title}
      </Heading>

      <Grid gap="20px" mb="100px">
        {survey?.questions?.map((q, i) => (
          <Question key={i} index={i} question={q} handleChange={handleChange} />
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
