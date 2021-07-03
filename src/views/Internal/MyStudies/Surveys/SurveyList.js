import { Grid } from "@chakra-ui/react";

import SurveyCard from "./SurveyCard";

function SurveyList({ surveys, responsesRef, setSurvey }) {
  return (
    <Grid gridGap="10px">
      {surveys?.map((s, i) => (
        <SurveyCard key={i} survey={s} responsesRef={responsesRef} setSurvey={setSurvey} />
      ))}
    </Grid>
  );
}

export default SurveyList;
