import { useQuestionsForm } from "hooks";

import QuestionsInputs from "./QuestionsInputs";

function QuestionsForm({ study, onSubmit, Wrapper }) {
  const questionsForm = useQuestionsForm(study, onSubmit);

  const title = "Questions";
  const description =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation";

  const handleSubmit = () => {
    const isValid = questionsForm.validate();

    if (isValid) {
      onSubmit(questionsForm.values);
    }
  };

  return (
    <Wrapper title={title} description={description} handleSubmit={handleSubmit}>
      <QuestionsInputs
        values={questionsForm.values}
        errors={questionsForm.errors}
        hasChanged={questionsForm.hasChanged}
        notDefault={questionsForm.notDefault}
        createQuestion={questionsForm.create}
        updateQuestion={questionsForm.update}
        deleteQuestion={questionsForm.delete}
        clearQuestions={questionsForm.clear}
        resetQuestions={questionsForm.reset}
        sortQuestions={questionsForm.onSortEnd}
      />
    </Wrapper>
  );
}

export default QuestionsForm;
