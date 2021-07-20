import { Grid } from "@chakra-ui/react";

import SurveyCard from "./SurveyCard";

function SurveyList({ surveys, surveysRef, setSurvey }) {
  return (
    <Grid gridGap="10px">
      {surveys?.map((s, i) => (
        <SurveyCard key={i} survey={s} surveysRef={surveysRef} setSurvey={setSurvey} />
      ))}
    </Grid>
  );
}

export default SurveyList;
