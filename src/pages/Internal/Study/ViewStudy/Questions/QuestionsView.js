import QuestionsTable from "components/feature/Study/QuestionsView/QuestionsTable";
import QuestionsEmpty from "components/feature/Study/QuestionsView/QuestionsEmpty";
import TabHeader from "../TabHeader";

function QuestionsView({ study }) {
  if (!study?.questions?.length) {
    return <QuestionsEmpty />;
  }

  return (
    <>
      <TabHeader heading="Questions"></TabHeader>
      <QuestionsTable questions={study.questions} />
    </>
  );
}

export default QuestionsView;
