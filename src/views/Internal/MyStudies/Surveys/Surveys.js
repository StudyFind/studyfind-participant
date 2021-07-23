import { firestore } from "database/firebase";

import { useCollection } from "hooks";
import { useParams, useHistory } from "react-router-dom";

import { Box } from "@chakra-ui/react";
import { Loader, Message } from "components";

import SurveyList from "./SurveyList";
import SurveyRespond from "./SurveyRespond";
import SurveysError from "./SurveysError";

function Surveys({ study }) {
  const history = useHistory();
  const { actionID } = useParams();

  const surveysRef = firestore.collection("studies").doc(study.id).collection("surveys");
  const [surveys, loading, error] = useCollection(surveysRef); //order by time

  const handleSelectSurvey = (surveyID) => {
    history.push(`/MyStudies/${study.id}/surveys/${surveyID}`);
  };

  const handleCloseSurvey = () => {
    history.push(`/MyStudies/${study.id}/surveys`);
  };

  if (loading) {
    return (
      <Box h="500px">
        <Loader />
      </Box>
    );
  }

  if (error) return <SurveysError />;

  if (!surveys || !surveys.length) {
    return (
      <Box>
        <Message title="No surveys" description="This study has not released any surveys yet!" />
      </Box>
    );
  }

  return !actionID ? (
    <Box p="25px">
      <SurveyList surveys={surveys} surveysRef={surveysRef} setSurvey={handleSelectSurvey} />
    </Box>
  ) : (
    <SurveyRespond
      survey={surveys.find((s) => s.id === actionID)}
      surveysRef={surveysRef}
      handleCloseSurvey={handleCloseSurvey}
    />
  );
}

export default Surveys;
