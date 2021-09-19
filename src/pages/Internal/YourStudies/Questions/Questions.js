import { Grid } from "@chakra-ui/react";
import QuestionCardParticipant from "components/feature/Participants/QuestionCard/QuestionCardParticipant";

function Questions({ study, responses }) {
  return (
    <Grid gap="15px">
      {study?.questions?.map((question, i) => (
        <QuestionCardParticipant
          key={i}
          question={question}
          reponse={responses[i]}
        />
      ))}
    </Grid>
  );
}

export default Questions;
