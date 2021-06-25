import { List } from "components";

import SurveyCard from "./SurveyCard";

function SurveyList({ surveys, setSurvey }) {
  return (
    <List>
      {surveys?.map((s, i) => (
        <SurveyCard key={i} survey={s} setSurvey={setSurvey} />
      ))}
    </List>
  );
}

export default SurveyList;
